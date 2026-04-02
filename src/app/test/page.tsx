'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ChatBubble from '@/components/ChatBubble'
import SceneCard from '@/components/SceneCard'
import TypingIndicator from '@/components/TypingIndicator'
import TraitUnlock from '@/components/TraitUnlock'
import MiniStarMap from '@/components/MiniStarMap'
import ChapterTransition from '@/components/ChapterTransition'
import {
  storyBeats,
  chapters,
  TRAIT_UNLOCK_MAP,
  shouldShowStarMap,
  StoryMessage,
  StoryChoice,
  SceneGradient,
} from '@/content/story'
import { QuestionOption, ProfileScores, DIMENSIONS } from '@/types'

// A rendered message in the chat log
interface ChatMessage {
  id: string
  type: 'scene' | 'narrator' | 'partner' | 'user'
  text: string
  sceneGradient?: SceneGradient
  sceneEmoji?: string
}

export default function TestPage() {
  const router = useRouter()

  // Story state
  const [currentBeatIndex, setCurrentBeatIndex] = useState(0)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [chatLog, setChatLog] = useState<ChatMessage[]>([])
  const [showingTyping, setShowingTyping] = useState(false)
  const [showChoices, setShowChoices] = useState(false)
  const [choiceCount, setChoiceCount] = useState(0)
  const [answers, setAnswers] = useState<QuestionOption[]>([])
  const [runningScores, setRunningScores] = useState<Record<string, number>>({})

  // Overlay states
  const [showChapter, setShowChapter] = useState<number | null>(1) // Start with chapter 1
  const [traitName, setTraitName] = useState<string | null>(null)
  const [showStarMap, setShowStarMap] = useState(false)

  // Processing lock to prevent double-triggers
  const processingRef = useRef(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const isPlayingRef = useRef(false)

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [])

  // Play messages for a beat sequentially
  const playMessages = useCallback(
    async (beatIdx: number) => {
      if (isPlayingRef.current) return
      isPlayingRef.current = true

      const beat = storyBeats[beatIdx]
      if (!beat) return

      for (let i = 0; i < beat.messages.length; i++) {
        const msg = beat.messages[i]
        const delay = msg.delay || 500

        if (msg.type === 'choice') {
          // Show choices
          setShowChoices(true)
          isPlayingRef.current = false
          return
        }

        // Show typing indicator for partner messages
        if (msg.type === 'partner') {
          setShowingTyping(true)
          scrollToBottom()
          await new Promise((r) => setTimeout(r, 600 + Math.random() * 400))
          setShowingTyping(false)
        } else {
          await new Promise((r) => setTimeout(r, delay))
        }

        // Add message to chat log
        const chatMsg: ChatMessage = {
          id: `beat${beatIdx}_msg${i}_${Date.now()}`,
          type: msg.type as 'scene' | 'narrator' | 'partner',
          text: msg.text || '',
          sceneGradient: msg.sceneGradient,
          sceneEmoji: msg.sceneEmoji,
        }

        setChatLog((prev) => [...prev, chatMsg])
        scrollToBottom()
      }

      isPlayingRef.current = false
    },
    [scrollToBottom]
  )

  // Start playing messages when chapter transition ends or when beat changes
  useEffect(() => {
    if (showChapter !== null) return // Wait for chapter transition
    if (showChoices) return // Already showing choices
    if (isPlayingRef.current) return

    playMessages(currentBeatIndex)
  }, [currentBeatIndex, showChapter, showChoices, playMessages])

  // Handle chapter transition complete
  const handleChapterComplete = useCallback(() => {
    setShowChapter(null)
  }, [])

  // Handle choice selection
  const handleChoice = useCallback(
    (choice: StoryChoice) => {
      if (processingRef.current) return
      processingRef.current = true

      // Add user's chosen message to chat
      const userMsg: ChatMessage = {
        id: `user_choice_${Date.now()}`,
        type: 'user',
        text: `${choice.emoji ? choice.emoji + ' ' : ''}${choice.text}`,
      }
      setChatLog((prev) => [...prev, userMsg])

      // Record answer
      const answer: QuestionOption = {
        id: choice.id,
        text: choice.text,
        scores: choice.scores,
      }
      const newAnswers = [...answers, answer]
      setAnswers(newAnswers)

      // Update running scores
      const newScores = { ...runningScores }
      for (const [key, value] of Object.entries(choice.scores)) {
        newScores[key] = (newScores[key] || 0) + value
      }
      setRunningScores(newScores)

      const newChoiceCount = choiceCount + 1
      setChoiceCount(newChoiceCount)
      setShowChoices(false)

      scrollToBottom()

      // Check for trait unlock
      const traitAtIndex = TRAIT_UNLOCK_MAP[currentBeatIndex]
      if (traitAtIndex) {
        setTimeout(() => {
          setTraitName(traitAtIndex)
          setTimeout(() => setTraitName(null), 1800)
        }, 600)
      }

      // Check for star map
      if (shouldShowStarMap(newChoiceCount - 1)) {
        setTimeout(() => {
          setShowStarMap(true)
          setTimeout(() => setShowStarMap(false), 2500)
        }, traitAtIndex ? 2500 : 800)
      }

      // Determine delay before next beat
      const totalDelay = traitAtIndex
        ? shouldShowStarMap(newChoiceCount - 1)
          ? 4500
          : 2800
        : shouldShowStarMap(newChoiceCount - 1)
          ? 3200
          : 1200

      setTimeout(() => {
        const nextBeatIndex = currentBeatIndex + 1

        if (nextBeatIndex >= storyBeats.length) {
          // Test complete
          sessionStorage.setItem('sonar_answers', JSON.stringify(newAnswers))
          router.push('/results')
          processingRef.current = false
          return
        }

        // Check if entering new chapter
        const currentChapter = storyBeats[currentBeatIndex].chapter
        const nextChapter = storyBeats[nextBeatIndex].chapter
        if (nextChapter !== currentChapter) {
          setShowChapter(nextChapter)
        }

        setCurrentBeatIndex(nextBeatIndex)
        processingRef.current = false
      }, totalDelay)
    },
    [answers, choiceCount, currentBeatIndex, runningScores, router, scrollToBottom]
  )

  // Get current beat's choices
  const currentBeat = storyBeats[currentBeatIndex]
  const choiceMessage = currentBeat?.messages.find((m) => m.type === 'choice')
  const currentChoices = choiceMessage?.choices || []

  // Get current chapter info for progress display
  const currentChapter = chapters.find(
    (ch) => currentBeatIndex >= ch.beatRange[0] && currentBeatIndex <= ch.beatRange[1]
  )

  // Progress: constellation dots
  const totalBeats = storyBeats.length
  const progress = choiceCount / totalBeats

  return (
    <main className="min-h-screen flex flex-col bg-[#0A0E1A]">
      {/* Top bar - chapter name + progress */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-[#0A0E1A]/80 backdrop-blur-md border-b border-white/[0.04]">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {currentChapter && (
              <span className="text-xs text-gray-500 tracking-wider">
                Chapter {currentChapter.id} &middot; {currentChapter.title}
              </span>
            )}
          </div>
          {/* Constellation progress */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 9 }, (_, i) => {
              const filled = i < Math.floor(progress * 9)
              return (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    filled
                      ? 'bg-accent shadow-[0_0_6px_rgba(99,102,241,0.5)]'
                      : 'bg-white/10'
                  }`}
                />
              )
            })}
          </div>
        </div>
        {/* Progress line */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-accent/60 to-accent"
          style={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          layout
        />
      </div>

      {/* Chapter transition overlay */}
      <AnimatePresence>
        {showChapter !== null && (
          <ChapterTransition
            chapter={{
              id: showChapter,
              title: chapters.find((c) => c.id === showChapter)?.title || '',
              subtitle: chapters.find((c) => c.id === showChapter)?.subtitle || '',
              description: chapters.find((c) => c.id === showChapter)?.description || '',
              questions: [],
            }}
            onComplete={handleChapterComplete}
          />
        )}
      </AnimatePresence>

      {/* Trait unlock overlay */}
      <TraitUnlock traitName={traitName || ''} visible={traitName !== null} />

      {/* Mini star map overlay */}
      <MiniStarMap
        visible={showStarMap}
        scores={runningScores as Partial<ProfileScores>}
      />

      {/* Chat area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto pt-16 pb-4 px-4"
      >
        <div className="max-w-2xl mx-auto">
          {/* Rendered messages */}
          {chatLog.map((msg) => {
            if (msg.type === 'scene') {
              return (
                <SceneCard
                  key={msg.id}
                  text={msg.text}
                  emoji={msg.sceneEmoji}
                  gradient={msg.sceneGradient}
                />
              )
            }
            return (
              <ChatBubble
                key={msg.id}
                type={msg.type}
                text={msg.text}
              />
            )
          })}

          {/* Typing indicator */}
          {showingTyping && <TypingIndicator />}

          {/* Choice buttons */}
          <AnimatePresence>
            {showChoices && (
              <motion.div
                className="mt-4 space-y-2.5 pb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {currentChoices.map((choice, i) => (
                  <motion.button
                    key={choice.id}
                    onClick={() => handleChoice(choice)}
                    className="w-full text-right"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.35 }}
                  >
                    <div className="inline-block max-w-[85%] text-left px-4 py-3 rounded-2xl rounded-br-sm border border-accent/20 bg-accent/[0.06] hover:bg-accent/15 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.12)] transition-all duration-300 cursor-pointer active:scale-[0.98]">
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        {choice.emoji && (
                          <span className="mr-1.5">{choice.emoji}</span>
                        )}
                        {choice.text}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scroll anchor */}
          <div ref={messagesEndRef} className="h-1" />
        </div>
      </div>
    </main>
  )
}
