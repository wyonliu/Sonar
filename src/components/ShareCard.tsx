'use client'

import { useRef, useCallback } from 'react'
import StarMap from './StarMap'
import { ProfileResult, ProfileScores } from '@/types'

interface ShareCardProps {
  result: ProfileResult
}

export default function ShareCard({ result }: ShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleShare = useCallback(async () => {
    if (!cardRef.current) return
    try {
      const html2canvas = (await import('html2canvas')).default
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#0A0E1A',
        scale: 2,
      })
      const url = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.download = 'sonar-starmap.png'
      link.href = url
      link.click()
    } catch {
      // Fallback: copy link
      navigator.clipboard?.writeText(window.location.href)
      alert('链接已复制到剪贴板')
    }
  }, [])

  return (
    <div>
      <div
        ref={cardRef}
        className="w-[360px] mx-auto p-8 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 border border-white/5"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-light text-white tracking-wider mb-1">
            Sonar · 声呐
          </h3>
          <p className="text-xs text-gray-500 tracking-widest">
            我的关系星图
          </p>
        </div>

        {/* Star Map */}
        <div className="flex justify-center mb-6">
          <StarMap scores={result.normalizedScores} size={260} animated={false} />
        </div>

        {/* Archetype */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent-light text-sm tracking-wider">
            {result.archetype}
          </span>
        </div>

        {/* Core insight */}
        <p className="text-xs text-gray-400 text-center leading-relaxed">
          {result.insights[0]}
        </p>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center">
          <p className="text-[10px] text-gray-600 tracking-wider">
            扫码测测你自己 → sonar.app
          </p>
        </div>
      </div>

      <button
        onClick={handleShare}
        className="mt-6 w-full max-w-[360px] mx-auto block px-6 py-3 rounded-xl
                   glass glass-hover text-sm text-gray-300 tracking-wider
                   transition-all duration-300"
      >
        保存星图卡片
      </button>
    </div>
  )
}
