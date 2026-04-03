'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useCallback, useRef, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CharacterPortrait from '@/components/game/CharacterPortrait'
import AffinityHearts from '@/components/game/AffinityHearts'
import StoryMessage from '@/components/game/StoryMessage'
import ChoicePanel from '@/components/game/ChoicePanel'
import TraitBar from '@/components/game/TraitBar'
import ActTransition from '@/components/game/ActTransition'
import MiniStarMap from '@/components/MiniStarMap'
import SelfPerception from '@/components/game/SelfPerception'
import EmojiReaction from '@/components/game/EmojiReaction'
import QuickSwipe from '@/components/game/QuickSwipe'
import {
  CharacterStory,
  StoryMessageData,
  ChoiceOption,
  getCharacterById,
} from '@/content/characters'
import {
  GameState,
  CollectedTrait,
  createInitialState,
  getStory,
  getCurrentAct,
  getCurrentChoicePoint,
  loadMessagesForPhase,
  handleChoice as engineHandleChoice,
  advanceAfterResponse,
  advanceAfterClosing,
  getTotalTraitsForStory,
  determineEnding,
} from '@/lib/gameEngine'
import { ProfileScores } from '@/types'

// Displayed message with unique id
interface DisplayedMsg {
  id: string
  data: StoryMessageData
}

function PlayContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const characterId = searchParams.get('character') || 'luchen'

  const story = getStory(characterId)
  const character = story?.character

  // Self-perception phase
  const [showSelfPerception, setShowSelfPerception] = useState(true)

  // Game state
  const [gameState, setGameState] = useState<GameState>(() => createInitialState(characterId))
  const [displayedMessages, setDisplayedMessages] = useState<DisplayedMsg[]>([])
  const [currentEmotion, setCurrentEmotion] = useState<string>('neutral')
  const [showChoices, setShowChoices] = useState(false)
  const [currentChoices, setCurrentChoices] = useState<ChoiceOption[]>([])
  const [showActTransition, setShowActTransition] = useState(true)
  const [showStarMap, setShowStarMap] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showEndingAnimation, setShowEndingAnimation] = useState(false)

  // Micro-interaction state
  const [activeMicroInteraction, setActiveMicroInteraction] = useState<StoryMessageData | null>(null)

  const scrollRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const playingRef = useRef(false)
  const msgCounter = useRef(0)

  const totalTraits = story ? getTotalTraitsForStory(story) : 12

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [])

  // Handle self-perception completion
  const handleSelfPerceptionComplete = useCallback((results: Record<string, number>) => {
    setGameState(prev => ({ ...prev, selfPerception: results }))
    setShowSelfPerception(false)
  }, [])

  // Ref for resolving micro-interaction promises
  const microResolveRef = useRef<(() => void) | null>(null)

  // When micro-interaction completes, resolve the promise
  const handleMicroComplete = useCallback((scores: Record<string, number>) => {
    setGameState(prev => {
      const newScores = { ...prev.scores }
      for (const [key, value] of Object.entries(scores)) {
        newScores[key] = (newScores[key] || 0) + value
      }
      return { ...prev, scores: newScores }
    })
    setActiveMicroInteraction(null)
    if (microResolveRef.current) {
      const resolve = microResolveRef.current
      microResolveRef.current = null
      // Small delay for animation
      setTimeout(resolve, 300)
    }
  }, [])

  // Play a sequence of messages with delays, handling micro-interactions
  const playMessages = useCallback(
    async (messages: StoryMessageData[], onDone?: () => void) => {
      if (playingRef.current) return
      playingRef.current = true
      setIsPlaying(true)

      for (const msg of messages) {
        // Handle micro-interactions inline
        if (msg.type === 'emoji_reaction' || msg.type === 'quick_swipe') {
          // Show micro-interaction and wait for user response
          setActiveMicroInteraction(msg)
          scrollToBottom()
          // Wait until user completes the interaction
          await new Promise<void>((resolve) => {
            microResolveRef.current = resolve
          })
          continue
        }

        const delay = msg.delay || (msg.type === 'scene' ? 600 : msg.type === 'partner' ? 400 : 500)

        // Update emotion if present
        if (msg.partnerEmotion) {
          setCurrentEmotion(msg.partnerEmotion)
        }

        // Wait before showing message
        await new Promise((r) => setTimeout(r, delay))

        const id = `msg_${msgCounter.current++}`
        setDisplayedMessages((prev) => [...prev, { id, data: msg }])
        scrollToBottom()

        // Wait for the message to "finish" (typewriter etc.)
        if (msg.type === 'partner') {
          const textLen = msg.text?.length || 0
          await new Promise((r) => setTimeout(r, 600 + textLen * 30))
        } else {
          await new Promise((r) => setTimeout(r, 400))
        }
      }

      playingRef.current = false
      setIsPlaying(false)
      onDone?.()
    },
    [scrollToBottom]
  )

  // Start playing when act transition ends
  const handleActTransitionComplete = useCallback(() => {
    setShowActTransition(false)
  }, [])

  // When act transition completes, load messages_before for current choice point
  useEffect(() => {
    if (!story) return
    if (showSelfPerception) return
    if (showActTransition) return
    if (playingRef.current) return
    if (gameState.phase !== 'act_transition') return

    // Move to messages_before
    const newState = { ...gameState, phase: 'messages_before' as const }
    setGameState(newState)

    const messages = loadMessagesForPhase(story, newState)
    playMessages(messages, () => {
      // Show choices
      const cp = getCurrentChoicePoint(story, newState)
      if (cp) {
        setCurrentChoices(cp.choices)
        setShowChoices(true)
      }
    })
  }, [showActTransition, showSelfPerception, gameState.phase, story])

  // Handle player choice
  const handleChoiceSelect = useCallback(
    (choice: ChoiceOption) => {
      if (!story) return

      setShowChoices(false)
      setCurrentChoices([])

      const { newState, responseMessages, traitUnlocked } = engineHandleChoice(story, gameState, choice)

      setGameState(newState)

      // Play response messages
      playMessages(responseMessages, () => {
        // Advance: more choice points in this act, or closing?
        const advanced = advanceAfterResponse(story, newState)
        setGameState(advanced)

        if (advanced.phase === 'messages_before') {
          // Next choice point in same act
          const messages = loadMessagesForPhase(story, advanced)
          playMessages(messages, () => {
            const cp = getCurrentChoicePoint(story, advanced)
            if (cp) {
              setCurrentChoices(cp.choices)
              setShowChoices(true)
            }
          })
        } else if (advanced.phase === 'closing') {
          // Play closing messages then transition
          const closingMsgs = loadMessagesForPhase(story, advanced)
          playMessages(closingMsgs, () => {
            // Show star map briefly
            setShowStarMap(true)
            setTimeout(() => {
              setShowStarMap(false)

              const afterClosing = advanceAfterClosing(story, advanced)
              setGameState(afterClosing)

              if (afterClosing.phase === 'act_transition') {
                // Show next act transition
                setShowActTransition(true)
              } else if (afterClosing.phase === 'ending') {
                // Game is over, show ending
                handleEnding(afterClosing)
              }
            }, 2500)
          })
        }
      })
    },
    [story, gameState, playMessages]
  )

  // Handle ending
  const handleEnding = useCallback(
    (endState: GameState) => {
      if (!story) return

      setShowEndingAnimation(true)

      // Brief pause for animation
      setTimeout(() => {
        const ending = determineEnding(story, endState)
        if (ending) {
          playMessages(ending.messages, () => {
            // Save scores and navigate to results
            setTimeout(() => {
              // Convert game scores to the format results page expects
              const answers = Object.entries(endState.scores).map(([key, value]) => ({
                id: `game_${key}`,
                text: key,
                scores: { [key]: value },
              }))
              sessionStorage.setItem('sonar_answers', JSON.stringify(answers))
              sessionStorage.setItem('sonar_character', characterId)
              // Store self-perception data
              if (endState.selfPerception && Object.keys(endState.selfPerception).length > 0) {
                sessionStorage.setItem('sonar_self_perception', JSON.stringify(endState.selfPerception))
              }
              router.push('/results')
            }, 2000)
          })
        }
        setShowEndingAnimation(false)
      }, 3000)
    },
    [story, playMessages, router, characterId]
  )

  if (!story || !character) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500 text-sm">角色不存在</div>
      </main>
    )
  }

  const currentAct = getCurrentAct(story, gameState)
  const actLabel = currentAct
    ? `第${['一', '二', '三', '四', '五'][currentAct.id - 1] || currentAct.id}幕 · ${currentAct.title}`
    : ''

  return (
    <main className="min-h-screen flex flex-col bg-[#0A0E1A]">
      {/* Self-perception phase */}
      <AnimatePresence>
        {showSelfPerception && (
          <SelfPerception onComplete={handleSelfPerceptionComplete} />
        )}
      </AnimatePresence>

      {/* Act transition overlay */}
      <AnimatePresence>
        {!showSelfPerception && showActTransition && currentAct && (
          <ActTransition act={currentAct} onComplete={handleActTransitionComplete} />
        )}
      </AnimatePresence>

      {/* Star map overlay */}
      <MiniStarMap
        visible={showStarMap}
        scores={gameState.scores as Partial<ProfileScores>}
      />

      {/* Ending animation overlay */}
      <AnimatePresence>
        {showEndingAnimation && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-900/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-4xl mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              ✨
            </motion.div>
            <motion.p
              className="text-lg text-gray-300 tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              你的人格碎片正在聚合...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top bar (fixed) */}
      {!showSelfPerception && (
        <div className="fixed top-0 left-0 right-0 z-30 bg-[#0A0E1A]/80 backdrop-blur-md border-b border-white/[0.04]">
          <div className="max-w-2xl mx-auto px-4 py-2.5 flex items-center justify-between">
            <span className="text-xs text-gray-500 tracking-wider">{actLabel}</span>
            <AffinityHearts affinity={gameState.affinity} />
          </div>
        </div>
      )}

      {/* Character portrait area */}
      {!showSelfPerception && (
        <div className="pt-10">
          <CharacterPortrait
            character={character}
            emotion={currentEmotion}
            affinity={gameState.affinity}
          />
        </div>
      )}

      {/* Story area (scrollable) */}
      {!showSelfPerception && (
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto pb-16"
          style={{ minHeight: '45vh' }}
        >
          <div className="max-w-2xl mx-auto">
            {displayedMessages.map((msg) => (
              <StoryMessage
                key={msg.id}
                message={msg.data}
                character={character}
              />
            ))}

            {/* Micro-interaction: Emoji Reaction */}
            <AnimatePresence>
              {activeMicroInteraction?.type === 'emoji_reaction' && activeMicroInteraction.reactionOptions && (
                <EmojiReaction
                  context={activeMicroInteraction.reactionContext || ''}
                  options={activeMicroInteraction.reactionOptions}
                  onSelect={handleMicroComplete}
                />
              )}
            </AnimatePresence>

            {/* Micro-interaction: Quick Swipe */}
            <AnimatePresence>
              {activeMicroInteraction?.type === 'quick_swipe' && activeMicroInteraction.swipeStatement && (
                <QuickSwipe
                  statement={activeMicroInteraction.swipeStatement}
                  agreeScores={activeMicroInteraction.agreeScores || {}}
                  disagreeScores={activeMicroInteraction.disagreeScores || {}}
                  onComplete={handleMicroComplete}
                />
              )}
            </AnimatePresence>

            {/* Choices */}
            <AnimatePresence>
              {showChoices && currentChoices.length > 0 && (
                <ChoicePanel
                  choices={currentChoices}
                  onSelect={handleChoiceSelect}
                />
              )}
            </AnimatePresence>

            {/* Scroll anchor */}
            <div ref={messagesEndRef} className="h-4" />
          </div>
        </div>
      )}

      {/* Trait collection bar */}
      {!showSelfPerception && (
        <TraitBar traits={gameState.collectedTraits} totalTraits={totalTraits} />
      )}
    </main>
  )
}

export default function PlayPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center bg-[#0A0E1A]">
        <div className="text-gray-500 text-sm">加载中...</div>
      </main>
    }>
      <PlayContent />
    </Suspense>
  )
}
