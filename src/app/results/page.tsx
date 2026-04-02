'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Share2, Sparkles, Users } from 'lucide-react'
import StarMap from '@/components/StarMap'
import ShareCard from '@/components/ShareCard'
import { QuestionOption, ProfileResult, DIMENSIONS, DimensionKey } from '@/types'
import { calculateScores, normalizeScores, generateLocalInsights } from '@/lib/scoring'

export default function ResultsPage() {
  const router = useRouter()
  const [result, setResult] = useState<ProfileResult | null>(null)
  const [showShareCard, setShowShareCard] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem('sonar_answers')
    if (!stored) {
      router.push('/')
      return
    }

    try {
      const answers: QuestionOption[] = JSON.parse(stored)
      const scores = calculateScores(answers)
      const normalizedScores = normalizeScores(scores)
      const { insights, shadow, archetype } = generateLocalInsights(normalizedScores)

      setResult({
        scores,
        normalizedScores,
        insights,
        shadow,
        story: '',
        archetype,
      })

      // Optionally try AI-enhanced analysis
      fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, scores: normalizedScores }),
      })
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data) {
            setResult(prev => prev ? {
              ...prev,
              insights: data.insights || prev.insights,
              shadow: data.shadow || prev.shadow,
              story: data.story || prev.story,
              archetype: data.archetype || prev.archetype,
            } : prev)
          }
        })
        .catch(() => {
          // AI enhancement failed, local results are fine
        })
    } catch {
      router.push('/')
      return
    }

    setLoading(false)
  }, [router])

  if (loading || !result) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <motion.div
          className="text-accent-light text-lg tracking-wider"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          正在生成你的关系星图...
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="w-8 h-8 text-accent-light mx-auto mb-4" strokeWidth={1.5} />
          <h1 className="text-3xl md:text-4xl font-light text-white tracking-wider mb-2">
            你的关系星图
          </h1>
          <p className="text-gray-500 text-sm tracking-widest">
            Your Relationship Star Map
          </p>
        </motion.div>

        {/* Archetype badge */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span className="px-6 py-2 rounded-full bg-accent/15 border border-accent/20 text-accent-light tracking-wider text-lg">
            {result.archetype}
          </span>
        </motion.div>

        {/* Star Map */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <StarMap scores={result.normalizedScores} size={340} />
        </motion.div>

        {/* Dimension scores */}
        <motion.div
          className="mb-12 space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {DIMENSIONS.map((dim, i) => {
            const value = result.normalizedScores[dim.key as DimensionKey]
            return (
              <motion.div
                key={dim.key}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + i * 0.1 }}
              >
                <span className="w-20 text-right text-sm text-gray-400 flex-shrink-0">
                  {dim.label}
                </span>
                <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ delay: 1.6 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
                <span className="w-8 text-xs text-gray-500">{value}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Insights */}
        <motion.div
          className="mb-10 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <h2 className="text-lg font-light text-white tracking-wider mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent-light" />
            核心洞察
          </h2>
          {result.insights.map((insight, i) => (
            <motion.p
              key={i}
              className="text-sm text-gray-300 leading-relaxed pl-6 border-l border-accent/20"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 + i * 0.3 }}
            >
              {insight}
            </motion.p>
          ))}
        </motion.div>

        {/* Shadow */}
        <motion.div
          className="mb-12 p-6 rounded-xl glass"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
        >
          <h2 className="text-lg font-light text-white tracking-wider mb-3">
            关系阴影
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            {result.shadow}
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <button
            onClick={() => setShowShareCard(!showShareCard)}
            className="w-full px-6 py-4 rounded-xl glass glass-hover
                       flex items-center justify-center gap-3
                       text-gray-300 tracking-wider transition-all duration-300"
          >
            <Share2 className="w-4 h-4" />
            分享我的星图
          </button>

          <button
            className="w-full px-6 py-4 rounded-xl
                       bg-accent/20 border border-accent/30
                       hover:bg-accent/30 hover:border-accent/50
                       flex items-center justify-center gap-3
                       text-white tracking-wider transition-all duration-500"
          >
            <Users className="w-4 h-4" />
            查看与你共鸣的人
          </button>
        </motion.div>

        {/* Share card modal */}
        {showShareCard && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ShareCard result={result} />
          </motion.div>
        )}

        {/* Retake */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <button
            onClick={() => {
              sessionStorage.removeItem('sonar_answers')
              router.push('/test')
            }}
            className="text-xs text-gray-600 hover:text-gray-400 tracking-wider transition-colors"
          >
            重新测试
          </button>
        </motion.div>
      </div>
    </main>
  )
}
