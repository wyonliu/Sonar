'use client'

import { motion } from 'framer-motion'
import { CollectedTrait } from '@/lib/gameEngine'

interface TraitCardProps {
  trait: CollectedTrait
  variant?: 'small' | 'expanded'
  index?: number
}

export default function TraitCard({ trait, variant = 'small', index = 0 }: TraitCardProps) {
  if (variant === 'small') {
    return (
      <motion.div
        className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-lg cursor-pointer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.05 }}
        whileHover={{ scale: 1.1 }}
        title={trait.name}
      >
        {trait.emoji}
      </motion.div>
    )
  }

  return (
    <motion.div
      className="p-3 rounded-xl glass border border-white/[0.08]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{trait.emoji}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white">{trait.name}</p>
          <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{trait.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
