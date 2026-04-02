'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Waves } from 'lucide-react'
import StarMap from '@/components/StarMap'
import { ProfileScores } from '@/types'

// In a real app this would fetch from a database
// For MVP, we generate a demo profile from the ID
function generateDemoScores(id: string): ProfileScores {
  // Use the id string to seed some deterministic but varied scores
  let hash = 0
  for (let i = 0; i < id.length; i++) {
    hash = ((hash << 5) - hash) + id.charCodeAt(i)
    hash |= 0
  }
  const seeded = (offset: number) => {
    const val = Math.abs((hash * (offset + 1) * 2654435761) % 100)
    return Math.max(15, Math.min(90, val))
  }

  return {
    intimacy_pace: seeded(1),
    expression_intensity: seeded(2),
    autonomy_need: seeded(3),
    security_baseline: seeded(4),
    conflict_style: seeded(5),
    commitment_depth: seeded(6),
    growth_orientation: seeded(7),
  }
}

export default function SharePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const scores = generateDemoScores(params.id)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        className="max-w-md w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <Waves className="w-8 h-8 text-accent-light mx-auto mb-4" strokeWidth={1.5} />
        <h1 className="text-2xl font-light text-white tracking-wider mb-1">
          TA 的关系星图
        </h1>
        <p className="text-xs text-gray-500 tracking-widest mb-10">
          Sonar · 声呐
        </p>

        {/* Star Map */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <StarMap scores={scores} size={300} />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-gray-400 text-sm mb-6">
            每个人的星图都独一无二
          </p>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 rounded-full text-base font-medium tracking-wider
                       bg-accent/20 text-white border border-accent/30
                       hover:bg-accent/30 hover:border-accent/50
                       transition-all duration-500"
          >
            测测你自己
          </button>
        </motion.div>
      </motion.div>
    </main>
  )
}
