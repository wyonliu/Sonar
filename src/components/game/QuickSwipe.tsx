'use client'

import { useState, useRef } from 'react'
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion'

interface QuickSwipeProps {
  statement: string
  agreeScores: Record<string, number>
  disagreeScores: Record<string, number>
  onComplete: (scores: Record<string, number>) => void
}

export default function QuickSwipe({ statement, agreeScores, disagreeScores, onComplete }: QuickSwipeProps) {
  const [decided, setDecided] = useState<'agree' | 'disagree' | null>(null)
  const constraintsRef = useRef(null)
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-150, 0, 150], [-8, 0, 8])
  const agreeOpacity = useTransform(x, [0, 80], [0, 1])
  const disagreeOpacity = useTransform(x, [-80, 0], [1, 0])

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 80
    if (info.offset.x > threshold) {
      setDecided('agree')
      setTimeout(() => onComplete(agreeScores), 400)
    } else if (info.offset.x < -threshold) {
      setDecided('disagree')
      setTimeout(() => onComplete(disagreeScores), 400)
    }
  }

  const handleTapAgree = () => {
    if (decided) return
    setDecided('agree')
    setTimeout(() => onComplete(agreeScores), 400)
  }

  const handleTapDisagree = () => {
    if (decided) return
    setDecided('disagree')
    setTimeout(() => onComplete(disagreeScores), 400)
  }

  return (
    <motion.div
      className="mx-4 my-3"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div ref={constraintsRef} className="relative">
        {/* Agree/Disagree hint labels */}
        <div className="flex justify-between items-center mb-2 px-2">
          <motion.span
            className="text-xs text-red-400/60 tracking-wider"
            style={{ opacity: disagreeOpacity }}
          >
            不太是
          </motion.span>
          <motion.span
            className="text-xs text-green-400/60 tracking-wider"
            style={{ opacity: agreeOpacity }}
          >
            就是这样
          </motion.span>
        </div>

        {/* Swipeable card */}
        <motion.div
          drag={decided ? false : 'x'}
          dragConstraints={{ left: -160, right: 160 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          style={{ x, rotate }}
          animate={
            decided === 'agree'
              ? { x: 200, opacity: 0 }
              : decided === 'disagree'
              ? { x: -200, opacity: 0 }
              : {}
          }
          transition={{ duration: 0.3 }}
          className="px-5 py-4 rounded-2xl border border-white/[0.08] glass cursor-grab active:cursor-grabbing"
        >
          <p className="text-sm md:text-base text-gray-200 text-center leading-relaxed">
            {statement}
          </p>
        </motion.div>

        {/* Tap buttons as fallback */}
        <div className="flex justify-center gap-6 mt-3">
          <motion.button
            onClick={handleTapDisagree}
            className="text-xs text-gray-500 hover:text-gray-300 px-3 py-1.5 rounded-full border border-white/5 hover:border-white/10 transition-all"
            whileTap={{ scale: 0.95 }}
          >
            不太是
          </motion.button>
          <motion.button
            onClick={handleTapAgree}
            className="text-xs text-gray-500 hover:text-gray-300 px-3 py-1.5 rounded-full border border-white/5 hover:border-white/10 transition-all"
            whileTap={{ scale: 0.95 }}
          >
            就是这样
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
