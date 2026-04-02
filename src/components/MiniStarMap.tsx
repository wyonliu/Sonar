'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { DIMENSIONS, ProfileScores } from '@/types'

interface MiniStarMapProps {
  visible: boolean
  scores: Partial<ProfileScores>
}

export default function MiniStarMap({ visible, scores }: MiniStarMapProps) {
  const size = 160
  const center = size / 2
  const radius = 55

  // Build polygon points from current scores
  const points = DIMENSIONS.map((dim, i) => {
    const angle = (Math.PI * 2 * i) / DIMENSIONS.length - Math.PI / 2
    const raw = (scores as Record<string, number>)[dim.key] || 0
    // Normalize raw to 0-1 range (raw can be roughly -80 to +80, but usually -30 to +30 at this point)
    const normalized = Math.max(0.15, Math.min(1, (raw + 40) / 80))
    const x = center + Math.cos(angle) * radius * normalized
    const y = center + Math.sin(angle) * radius * normalized
    return { x, y, label: dim.labelShort }
  })

  const polygonPoints = points.map(p => `${p.x},${p.y}`).join(' ')

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              {/* Grid circles */}
              {[0.33, 0.66, 1].map((r) => (
                <circle
                  key={r}
                  cx={center}
                  cy={center}
                  r={radius * r}
                  fill="none"
                  stroke="rgba(99, 102, 241, 0.15)"
                  strokeWidth="0.5"
                />
              ))}

              {/* Axes */}
              {DIMENSIONS.map((_, i) => {
                const angle = (Math.PI * 2 * i) / DIMENSIONS.length - Math.PI / 2
                return (
                  <line
                    key={i}
                    x1={center}
                    y1={center}
                    x2={center + Math.cos(angle) * radius}
                    y2={center + Math.sin(angle) * radius}
                    stroke="rgba(99, 102, 241, 0.1)"
                    strokeWidth="0.5"
                  />
                )
              })}

              {/* Data polygon */}
              <motion.polygon
                points={polygonPoints}
                fill="rgba(99, 102, 241, 0.15)"
                stroke="rgba(99, 102, 241, 0.6)"
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />

              {/* Data points */}
              {points.map((p, i) => (
                <motion.circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r="2.5"
                  fill="#6366F1"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                />
              ))}
            </svg>
          </motion.div>
          <motion.p
            className="text-sm text-gray-400 mt-3 tracking-wider"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            你的轮廓正在浮现...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
