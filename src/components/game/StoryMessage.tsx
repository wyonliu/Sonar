'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { StoryMessageData, Character } from '@/content/characters'

const GRADIENT_MAP: Record<string, string> = {
  warm: 'from-amber-900/40 to-orange-900/40',
  cool: 'from-blue-900/40 to-cyan-900/40',
  tense: 'from-red-900/40 to-gray-900/40',
  romantic: 'from-pink-900/40 to-rose-900/40',
  neutral: 'from-gray-800/40 to-slate-800/40',
  bittersweet: 'from-purple-900/40 to-indigo-900/40',
  hopeful: 'from-emerald-900/40 to-teal-900/40',
}

interface StoryMessageProps {
  message: StoryMessageData
  character?: Character
  onComplete?: () => void
  autoAdvance?: boolean
}

function TypewriterText({ text, speed = 30, onComplete }: { text: string; speed?: number; onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const completedRef = useRef(false)

  useEffect(() => {
    let i = 0
    completedRef.current = false
    setDisplayedText('')
    setShowCursor(true)

    const timer = setInterval(() => {
      i++
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i))
      } else {
        clearInterval(timer)
        setShowCursor(false)
        if (!completedRef.current) {
          completedRef.current = true
          onComplete?.()
        }
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed, onComplete])

  return (
    <span>
      {displayedText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  )
}

export default function StoryMessage({ message, character, onComplete, autoAdvance = true }: StoryMessageProps) {
  const [showTyping, setShowTyping] = useState(message.type === 'partner')
  const [showContent, setShowContent] = useState(message.type !== 'partner')

  useEffect(() => {
    if (message.type === 'partner') {
      const timer = setTimeout(() => {
        setShowTyping(false)
        setShowContent(true)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [message.type])

  // Scene card
  if (message.type === 'scene') {
    const gradient = message.gradient ? GRADIENT_MAP[message.gradient] : GRADIENT_MAP.neutral
    return (
      <motion.div
        className={`mx-2 my-4 p-5 rounded-2xl bg-gradient-to-br ${gradient} border border-white/[0.06]`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        onAnimationComplete={() => onComplete?.()}
      >
        {message.emoji && (
          <div className="text-2xl mb-2">{message.emoji}</div>
        )}
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          {message.text}
        </p>
      </motion.div>
    )
  }

  // Narrator text
  if (message.type === 'narrator') {
    return (
      <motion.div
        className="mx-6 my-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        onAnimationComplete={() => onComplete?.()}
      >
        <p className="text-sm text-gray-500 italic leading-relaxed">
          {message.text}
        </p>
      </motion.div>
    )
  }

  // Partner dialogue
  if (message.type === 'partner') {
    return (
      <motion.div
        className="mx-2 my-3 flex items-start gap-2"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Avatar */}
        <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-lg">
          {character?.emoji || '🌙'}
        </div>

        <div className="flex-1">
          {/* Name */}
          <p className="text-xs text-gray-500 mb-1">{character?.name || '对方'}</p>

          {/* Bubble */}
          <div className="inline-block max-w-[85%] px-4 py-2.5 rounded-2xl rounded-tl-sm glass">
            {showTyping && (
              <div className="flex items-center gap-1 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}
            {showContent && (
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                <TypewriterText text={message.text || ''} onComplete={onComplete} />
              </p>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  // Trait unlock (inline)
  if (message.type === 'trait_unlock') {
    return (
      <motion.div
        className="mx-2 my-4 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        onAnimationComplete={() => onComplete?.()}
      >
        <div className="px-5 py-3 rounded-xl bg-accent/10 border border-accent/20 text-center">
          <div className="text-xl mb-1">{message.emoji}</div>
          <p className="text-sm text-accent-light font-medium">{message.text}</p>
        </div>
      </motion.div>
    )
  }

  return null
}
