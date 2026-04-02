'use client'

import { motion } from 'framer-motion'

interface ChatBubbleProps {
  type: 'partner' | 'user' | 'narrator'
  text: string
  emoji?: string
}

export default function ChatBubble({ type, text, emoji }: ChatBubbleProps) {
  if (type === 'narrator') {
    return (
      <motion.div
        className="flex justify-center mb-3 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-500 text-sm leading-relaxed text-center italic max-w-[85%] whitespace-pre-line">
          {text}
        </p>
      </motion.div>
    )
  }

  if (type === 'partner') {
    return (
      <motion.div
        className="flex items-end gap-2 mb-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* Avatar */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent/40 to-purple-500/40 border border-white/10 flex items-center justify-center text-xs">
          TA
        </div>
        {/* Bubble */}
        <div className="glass rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[75%]">
          <p className="text-sm md:text-base text-gray-200 leading-relaxed whitespace-pre-line">
            {emoji && <span className="mr-1">{emoji}</span>}
            {text}
          </p>
        </div>
      </motion.div>
    )
  }

  // type === 'user'
  return (
    <motion.div
      className="flex justify-end mb-3"
      initial={{ opacity: 0, x: 20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="bg-accent/20 border border-accent/30 rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[75%]">
        <p className="text-sm md:text-base text-gray-100 leading-relaxed whitespace-pre-line">
          {emoji && <span className="mr-1">{emoji}</span>}
          {text}
        </p>
      </div>
    </motion.div>
  )
}
