'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Suspense } from 'react'
import { MALE_CHARACTERS, FEMALE_CHARACTERS, Character } from '@/content/characters'

function ChooseContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const gender = searchParams.get('gender')

  // Female users see male characters, male users see female characters
  const characters: Character[] = gender === 'female' ? MALE_CHARACTERS : FEMALE_CHARACTERS

  const handleSelect = (character: Character) => {
    router.push(`/play?character=${character.id}`)
  }

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12 md:py-16">
      {/* Ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Title */}
      <motion.div
        className="text-center mb-10 relative z-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl md:text-3xl font-light text-white tracking-wider mb-2">
          选择你的故事
        </h1>
        <p className="text-sm text-gray-500 tracking-wider">
          每个角色都有独特的剧情
        </p>
      </motion.div>

      {/* Character grid - 2x2 on mobile, 4 cols on desktop */}
      <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative z-10">
        {characters.map((character, i) => (
          <motion.button
            key={character.id}
            onClick={() => handleSelect(character)}
            className={`relative rounded-2xl bg-gradient-to-b ${character.color} border border-white/[0.06]
              flex flex-col items-center justify-center p-5 md:p-6
              hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]
              hover:border-white/[0.12]
              transition-all duration-500 cursor-pointer group
              aspect-[3/4]`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/[0.03] to-transparent" />

            {/* Emoji */}
            <motion.span
              className="text-5xl md:text-6xl mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 200 }}
            >
              {character.emoji}
            </motion.span>

            {/* Name */}
            <h2 className="text-xl md:text-2xl font-medium text-white tracking-wider mb-1">
              {character.name}
            </h2>

            {/* Subtitle */}
            <p className="text-xs text-gray-400 tracking-wider mb-3">
              {character.subtitle}
            </p>

            {/* Quote */}
            <p className="text-xs text-gray-500 italic leading-relaxed text-center">
              &ldquo;{character.quote}&rdquo;
            </p>
          </motion.button>
        ))}
      </div>

      {/* Back */}
      <motion.button
        onClick={() => router.push('/test')}
        className="mt-8 text-xs text-gray-600 hover:text-gray-400 transition-colors tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        &larr; 返回
      </motion.button>
    </main>
  )
}

export default function ChoosePage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500 text-sm">加载中...</div>
      </main>
    }>
      <ChooseContent />
    </Suspense>
  )
}
