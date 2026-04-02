'use client'

import { motion } from 'framer-motion'
import { ActData } from '@/content/characters'

interface ActTransitionProps {
  act: ActData
  onComplete: () => void
}

export default function ActTransition({ act, onComplete }: ActTransitionProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-900/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 2500)
      }}
    >
      {/* Act number */}
      <motion.div
        className="text-accent/60 text-sm tracking-[0.3em] mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        第{['一', '二', '三', '四', '五'][act.id - 1] || act.id}幕
      </motion.div>

      {/* Emoji */}
      <motion.div
        className="text-5xl mb-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
      >
        {act.emoji}
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-light text-white mb-3 tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {act.title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-gray-500 text-sm tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        {act.subtitle}
      </motion.p>

      {/* Decorative line */}
      <motion.div
        className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ delay: 0.7, duration: 1.2, ease: 'easeOut' }}
      />
    </motion.div>
  )
}
