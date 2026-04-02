'use client'

import { motion } from 'framer-motion'
import { Chapter } from '@/types'

interface ChapterTransitionProps {
  chapter: Chapter
  onComplete: () => void
}

export default function ChapterTransition({ chapter, onComplete }: ChapterTransitionProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-900/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 2000)
      }}
    >
      {/* Chapter number */}
      <motion.div
        className="text-accent/60 text-sm tracking-[0.3em] uppercase mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Chapter {chapter.id}
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-light text-white mb-3 tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {chapter.title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-gray-500 text-sm tracking-widest mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {chapter.subtitle}
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-gray-400 text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {chapter.description}
      </motion.p>

      {/* Decorative line */}
      <motion.div
        className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
      />
    </motion.div>
  )
}
