'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface EmojiReactionOption {
  emoji: string
  label: string
  scores: Record<string, number>
}

interface EmojiReactionProps {
  context: string
  options: EmojiReactionOption[]
  onSelect: (scores: Record<string, number>) => void
}

export default function EmojiReaction({ context, options, onSelect }: EmojiReactionProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const handleSelect = (option: EmojiReactionOption, idx: number) => {
    if (selectedIdx !== null) return
    setSelectedIdx(idx)
    setTimeout(() => onSelect(option.scores), 600)
  }

  return (
    <motion.div
      className="mx-4 my-3"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Context text */}
      <p className="text-xs text-gray-500 text-center mb-3 tracking-wider">
        {context}
      </p>

      {/* Emoji options */}
      <div className="flex justify-center gap-4">
        {options.map((option, i) => {
          const isSelected = selectedIdx === i
          const isOther = selectedIdx !== null && !isSelected

          return (
            <motion.button
              key={i}
              onClick={() => handleSelect(option, i)}
              className="flex flex-col items-center gap-1"
              animate={{
                opacity: isOther ? 0.2 : 1,
                scale: isSelected ? 1.2 : 1,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className={`text-3xl block p-2 rounded-xl transition-all duration-300 ${
                  isSelected
                    ? 'bg-accent/20 shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                    : 'hover:bg-white/5'
                }`}
                animate={isSelected ? { scale: [1, 1.3, 1.1] } : {}}
                transition={{ duration: 0.4 }}
              >
                {option.emoji}
              </motion.span>
              <span className="text-[10px] text-gray-500">{option.label}</span>
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}
