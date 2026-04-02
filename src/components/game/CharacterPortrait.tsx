'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Character, EMOTION_EMOJIS } from '@/content/characters'

interface CharacterPortraitProps {
  character: Character
  emotion: string
  affinity: number
}

export default function CharacterPortrait({ character, emotion, affinity }: CharacterPortraitProps) {
  const emotionEmoji = EMOTION_EMOJIS[emotion] || EMOTION_EMOJIS.neutral

  return (
    <div className={`relative w-full bg-gradient-to-b ${character.color} overflow-hidden`}
      style={{ height: '30vh', minHeight: 180, maxHeight: 280 }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-white/5 blur-[60px]" />
      </div>

      {/* Character emoji / expression */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={emotion}
            className="text-7xl md:text-8xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {emotionEmoji}
          </motion.div>
        </AnimatePresence>

        <motion.p
          className="mt-3 text-sm text-white/60 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {character.name}
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0A0E1A] to-transparent" />
    </div>
  )
}
