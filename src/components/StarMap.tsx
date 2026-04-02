'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { DIMENSIONS, ProfileScores, DimensionKey } from '@/types'

interface StarMapProps {
  scores: ProfileScores
  size?: number
  animated?: boolean
  className?: string
}

export default function StarMap({ scores, size = 320, animated = true, className = '' }: StarMapProps) {
  const [progress, setProgress] = useState(animated ? 0 : 1)
  const center = size / 2
  const radius = size * 0.38
  const dims = DIMENSIONS
  const angleStep = (2 * Math.PI) / dims.length

  useEffect(() => {
    if (!animated) return
    const start = Date.now()
    const duration = 1800
    const tick = () => {
      const elapsed = Date.now() - start
      const p = Math.min(1, elapsed / duration)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(eased)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [animated])

  const getPoint = (index: number, value: number): [number, number] => {
    const angle = angleStep * index - Math.PI / 2
    const r = (value / 100) * radius * progress
    return [
      center + r * Math.cos(angle),
      center + r * Math.sin(angle),
    ]
  }

  const polygonPoints = dims
    .map((d, i) => {
      const val = scores[d.key as DimensionKey] || 50
      return getPoint(i, val)
    })
    .map(([x, y]) => `${x},${y}`)
    .join(' ')

  // Calculate warmth (higher expression + intimacy = warmer)
  const warmth = ((scores.expression_intensity || 50) + (scores.intimacy_pace || 50)) / 200
  const hue1 = Math.round(240 + warmth * 40) // indigo to purple
  const hue2 = Math.round(200 + warmth * 80) // blue to warm

  return (
    <div className={`relative ${className}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <radialGradient id="starmap-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={`hsla(${hue1}, 80%, 60%, 0.15)`} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="glow-filter">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="polygon-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={`hsla(${hue1}, 70%, 55%, ${0.25 * progress})`} />
            <stop offset="100%" stopColor={`hsla(${hue2}, 70%, 55%, ${0.15 * progress})`} />
          </linearGradient>
        </defs>

        {/* Background glow */}
        <circle cx={center} cy={center} r={radius * 1.1} fill="url(#starmap-glow)" />

        {/* Grid rings */}
        {[0.25, 0.5, 0.75, 1].map((scale) => (
          <circle
            key={scale}
            cx={center}
            cy={center}
            r={radius * scale}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={0.5}
          />
        ))}

        {/* Axis lines */}
        {dims.map((_, i) => {
          const angle = angleStep * i - Math.PI / 2
          const x2 = center + radius * Math.cos(angle)
          const y2 = center + radius * Math.sin(angle)
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x2}
              y2={y2}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={0.5}
            />
          )
        })}

        {/* Data polygon */}
        <motion.polygon
          points={polygonPoints}
          fill="url(#polygon-fill)"
          stroke={`hsla(${hue1}, 70%, 60%, ${0.7 * progress})`}
          strokeWidth={1.5}
          filter="url(#glow-filter)"
        />

        {/* Data points */}
        {dims.map((d, i) => {
          const val = scores[d.key as DimensionKey] || 50
          const [x, y] = getPoint(i, val)
          return (
            <circle
              key={d.key}
              cx={x}
              cy={y}
              r={3}
              fill={`hsla(${hue1}, 70%, 65%, ${progress})`}
              filter="url(#glow-filter)"
            />
          )
        })}

        {/* Labels */}
        {dims.map((d, i) => {
          const angle = angleStep * i - Math.PI / 2
          const labelR = radius + 24
          const x = center + labelR * Math.cos(angle)
          const y = center + labelR * Math.sin(angle)
          const val = scores[d.key as DimensionKey] || 50
          return (
            <text
              key={d.key}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fill={`rgba(255,255,255,${0.5 + (val / 100) * 0.4})`}
              fontSize={11}
              fontWeight={300}
            >
              {d.labelShort}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
