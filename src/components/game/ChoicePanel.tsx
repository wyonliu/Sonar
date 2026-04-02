'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChoiceOption } from '@/content/characters'

interface ChoicePanelProps {
  choices: ChoiceOption[]
  onSelect: (choice: ChoiceOption) => void
  accentColor?: string
}

export default function ChoicePanel({ choices, onSelect, accentColor }: ChoicePanelProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleSelect = (choice: ChoiceOption) => {
    if (selectedId) return
    setSelectedId(choice.id)
    setTimeout(() => onSelect(choice), 600)
  }

  return (
    <div className="mx-2 my-4 space-y-2.5 pb-2">
      <AnimatePresence>
        {choices.map((choice, i) => {
          const isSelected = selectedId === choice.id
          const isOther = selectedId !== null && !isSelected

          if (isOther) return null

          return (
            <motion.button
              key={choice.id}
              onClick={() => handleSelect(choice)}
              className={`w-full text-left transition-all duration-300 ${
                isSelected ? 'pointer-events-none' : 'cursor-pointer'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isOther ? 0 : 1,
                y: 0,
                x: isSelected ? 20 : 0,
              }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              layout
            >
              <div
                className={`px-4 py-3 rounded-2xl border transition-all duration-300
                  ${isSelected
                    ? 'border-accent/50 bg-accent/20 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                    : 'border-white/[0.08] glass glass-hover'
                  }
                  ${!selectedId ? 'active:scale-[0.98]' : ''}
                `}
                style={{ borderLeftWidth: 3 }}
              >
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {choice.emoji && <span className="mr-1.5">{choice.emoji}</span>}
                  {choice.text}
                </p>
              </div>
            </motion.button>
          )
        })}
      </AnimatePresence>

      {/* Selected choice shown as user's message */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="flex justify-end mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-br-sm bg-accent/20 border border-accent/30">
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                {(() => {
                  const c = choices.find((c) => c.id === selectedId)
                  return c ? `${c.emoji ? c.emoji + ' ' : ''}${c.text}` : ''
                })()}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
