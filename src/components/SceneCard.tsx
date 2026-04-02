'use client'

import { motion } from 'framer-motion'

type SceneGradient = 'warm' | 'cool' | 'tense' | 'romantic' | 'neutral' | 'bittersweet' | 'hopeful'

interface SceneCardProps {
  text: string
  emoji?: string
  gradient?: SceneGradient
}

const gradientMap: Record<SceneGradient, string> = {
  warm: 'from-amber-900/30 via-orange-900/20 to-yellow-900/10',
  cool: 'from-blue-900/30 via-cyan-900/20 to-slate-900/10',
  tense: 'from-red-900/25 via-rose-900/15 to-gray-900/10',
  romantic: 'from-pink-900/25 via-purple-900/20 to-indigo-900/10',
  neutral: 'from-gray-800/30 via-slate-800/20 to-gray-900/10',
  bittersweet: 'from-amber-900/20 via-gray-800/20 to-blue-900/15',
  hopeful: 'from-emerald-900/25 via-teal-900/20 to-cyan-900/10',
}

export default function SceneCard({ text, emoji, gradient = 'neutral' }: SceneCardProps) {
  return (
    <motion.div
      className={`w-full rounded-2xl px-6 py-5 mb-4 bg-gradient-to-br ${gradientMap[gradient]} border border-white/[0.06]`}
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {emoji && (
        <div className="text-2xl mb-2">{emoji}</div>
      )}
      <p className="text-sm md:text-base text-gray-300 leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </motion.div>
  )
}
