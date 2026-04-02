'use client'

import { motion } from 'framer-motion'

interface AffinityHeartsProps {
  affinity: number // 0-100
}

export default function AffinityHearts({ affinity }: AffinityHeartsProps) {
  const filledCount = Math.round(affinity / 20)

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < filledCount
        return (
          <motion.span
            key={i}
            className="text-base"
            animate={filled ? { scale: [1, 1.3, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filled ? '❤️' : '🤍'}
          </motion.span>
        )
      })}
    </div>
  )
}
