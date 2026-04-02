'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function GenderSelectPage() {
  const router = useRouter()

  const genders = [
    { id: 'female', label: '女生', emoji: '👩', gradient: 'from-pink-900/40 to-rose-900/40', border: 'border-pink-500/20 hover:border-pink-500/40' },
    { id: 'male', label: '男生', emoji: '👨', gradient: 'from-blue-900/40 to-indigo-900/40', border: 'border-blue-500/20 hover:border-blue-500/40' },
  ]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-light text-white text-center tracking-wider mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          你的性别
        </motion.h1>

        {/* Gender cards */}
        <div className="flex gap-4">
          {genders.map((g, i) => (
            <motion.button
              key={g.id}
              onClick={() => router.push(`/choose?gender=${g.id}`)}
              className={`flex-1 aspect-[3/4] rounded-2xl bg-gradient-to-b ${g.gradient} border ${g.border}
                flex flex-col items-center justify-center gap-4
                hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]
                transition-all duration-500 cursor-pointer active:scale-[0.97]`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-6xl md:text-7xl">{g.emoji}</span>
              <span className="text-xl text-white/90 tracking-widest">{g.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Hint */}
        <motion.p
          className="text-center text-xs text-gray-600 mt-8 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          选择后将为你匹配角色
        </motion.p>
      </motion.div>
    </main>
  )
}
