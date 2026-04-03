'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface SelfPerceptionQuestion {
  dimension: string
  left: { label: string; emoji: string; value: number }
  right: { label: string; emoji: string; value: number }
  question: string
}

export const SELF_PERCEPTION_QUESTIONS: SelfPerceptionQuestion[] = [
  {
    dimension: 'intimacy_pace',
    left: { label: '慢慢来', emoji: '🐢', value: 20 },
    right: { label: '一见如故', emoji: '⚡', value: 80 },
    question: '你认识新朋友时...',
  },
  {
    dimension: 'expression_intensity',
    left: { label: '闷在心里', emoji: '🤐', value: 20 },
    right: { label: '直接说出来', emoji: '💬', value: 80 },
    question: '你有情绪时...',
  },
  {
    dimension: 'autonomy_need',
    left: { label: '在一起', emoji: '🤝', value: 20 },
    right: { label: '要空间', emoji: '🦅', value: 80 },
    question: '在感情里你更需要...',
  },
  {
    dimension: 'security_baseline',
    left: { label: '有点担心', emoji: '😟', value: 20 },
    right: { label: '很安心', emoji: '😌', value: 80 },
    question: '对方没回消息时...',
  },
  {
    dimension: 'conflict_style',
    left: { label: '回避冲突', emoji: '🕊️', value: 20 },
    right: { label: '正面解决', emoji: '⚔️', value: 80 },
    question: '你们有分歧时...',
  },
  {
    dimension: 'commitment_depth',
    left: { label: '走一步看一步', emoji: '🚶', value: 20 },
    right: { label: '认定了就全力以赴', emoji: '🏔️', value: 80 },
    question: '你对感情的态度...',
  },
  {
    dimension: 'growth_orientation',
    left: { label: '稳定就好', emoji: '🏡', value: 20 },
    right: { label: '一起进步', emoji: '🚀', value: 80 },
    question: '你理想的关系是...',
  },
]

// 5 positions: 20, 35, 50, 65, 80
const POSITIONS = [20, 35, 50, 65, 80] as const

interface SelfPerceptionProps {
  onComplete: (results: Record<string, number>) => void
}

export default function SelfPerception({ onComplete }: SelfPerceptionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const [direction, setDirection] = useState(1) // 1 = forward, -1 = backward

  const question = SELF_PERCEPTION_QUESTIONS[currentIndex]
  const total = SELF_PERCEPTION_QUESTIONS.length
  const progress = ((currentIndex) / total) * 100

  const handleSelect = useCallback((value: number) => {
    setSelectedValue(value)

    setTimeout(() => {
      const newAnswers = { ...answers, [question.dimension]: value }
      setAnswers(newAnswers)
      setSelectedValue(null)
      setDirection(1)

      if (currentIndex < total - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        onComplete(newAnswers)
      }
    }, 400)
  }, [answers, currentIndex, total, question, onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0E1A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-accent/60 to-accent"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="absolute top-8 text-center px-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-xs text-gray-500 tracking-[0.3em] mb-1">
          {currentIndex + 1} / {total}
        </p>
        <h2 className="text-sm text-gray-400 tracking-wider">
          在开始之前，先看看你眼中的自己
        </h2>
      </motion.div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="flex flex-col items-center px-6 w-full max-w-md"
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -60 }}
          transition={{ duration: 0.3 }}
        >
          {/* Question text */}
          <motion.p
            className="text-xl md:text-2xl text-white font-light tracking-wider text-center mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {question.question}
          </motion.p>

          {/* Slider area */}
          <div className="w-full">
            {/* Labels at ends */}
            <div className="flex justify-between items-center mb-6 px-1">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">{question.left.emoji}</span>
                <span className="text-xs text-gray-400">{question.left.label}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">{question.right.emoji}</span>
                <span className="text-xs text-gray-400">{question.right.label}</span>
              </div>
            </div>

            {/* 5 tap positions */}
            <div className="flex justify-between items-center gap-2 px-1">
              {POSITIONS.map((pos, i) => {
                const isSelected = selectedValue === pos
                const isCenter = i === 2
                const dotSize = isCenter ? 'w-5 h-5' : i === 0 || i === 4 ? 'w-4 h-4' : 'w-4 h-4'

                return (
                  <motion.button
                    key={pos}
                    onClick={() => handleSelect(pos)}
                    className="flex-1 flex justify-center py-4"
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className={`${dotSize} rounded-full border-2 transition-all duration-200 ${
                        isSelected
                          ? 'bg-accent border-accent shadow-[0_0_16px_rgba(99,102,241,0.5)]'
                          : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                      }`}
                      animate={isSelected ? { scale: [1, 1.4, 1.2] } : {}}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                )
              })}
            </div>

            {/* Track line */}
            <div className="w-full h-px bg-white/10 -mt-[29px] mb-[29px] pointer-events-none mx-auto" style={{ width: 'calc(100% - 8px)', marginLeft: '4px' }} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Skip hint */}
      <motion.p
        className="absolute bottom-8 text-xs text-gray-600 tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        点选最符合你的位置
      </motion.p>
    </motion.div>
  )
}
