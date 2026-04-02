'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Waves } from 'lucide-react'

export default function LandingPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="flex flex-col items-center text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <Waves className="w-12 h-12 text-accent-light" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-light tracking-wider mb-4 animate-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <span className="text-white">Sonar</span>
          <span className="text-accent-light mx-3">·</span>
          <span className="text-white/90">声呐</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 tracking-widest mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          你从未如此了解自己
        </motion.p>

        {/* CTA */}
        <motion.button
          onClick={() => router.push('/test')}
          className="relative group px-10 py-4 rounded-full text-lg font-medium tracking-wider
                     bg-accent/20 text-white border border-accent/30
                     hover:bg-accent/30 hover:border-accent/50
                     transition-all duration-500 ease-out"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-accent/10" />
          <span className="relative">开始探索</span>
        </motion.button>

        {/* Footer hint */}
        <motion.p
          className="mt-20 text-xs text-gray-600 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          45 个场景 · 约 10 分钟 · 无需注册
        </motion.p>
      </motion.div>
    </main>
  )
}
