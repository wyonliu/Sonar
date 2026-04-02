'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Question, QuestionOption } from '@/types'

interface QuestionCardProps {
  question: Question
  questionIndex: number
  totalQuestions: number
  onAnswer: (option: QuestionOption) => void
  selectedOption: string | null
}

export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  selectedOption,
}: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-2xl mx-auto px-4"
      >
        {/* Question counter */}
        <motion.div
          className="text-xs text-gray-500 tracking-widest mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {questionIndex + 1} / {totalQuestions}
        </motion.div>

        {/* Scene text */}
        <motion.p
          className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {question.scene_text}
        </motion.p>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, i) => {
            const isSelected = selectedOption === option.id
            const isFaded = selectedOption !== null && !isSelected

            return (
              <motion.button
                key={option.id}
                onClick={() => {
                  if (!selectedOption) onAnswer(option)
                }}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 ease-out
                  ${isSelected
                    ? 'bg-accent/20 border-accent/50 shadow-[0_0_25px_rgba(99,102,241,0.2)]'
                    : isFaded
                      ? 'glass opacity-30 scale-[0.98]'
                      : 'glass glass-hover cursor-pointer'
                  }
                  border border-white/[0.08]
                `}
                initial={{ opacity: 0, y: 15 }}
                animate={{
                  opacity: isFaded ? 0.3 : 1,
                  y: 0,
                  scale: isFaded ? 0.98 : 1,
                }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.4 }}
                whileHover={!selectedOption ? { scale: 1.02 } : {}}
                whileTap={!selectedOption ? { scale: 0.98 } : {}}
              >
                <div className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mt-0.5
                    ${isSelected
                      ? 'bg-accent text-white'
                      : 'bg-white/10 text-gray-400'
                    }`}
                  >
                    {option.id}
                  </span>
                  <span className={`text-sm md:text-base leading-relaxed ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {option.text}
                  </span>
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
