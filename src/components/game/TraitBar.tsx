'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CollectedTrait } from '@/lib/gameEngine'
import TraitCard from './TraitCard'

interface TraitBarProps {
  traits: CollectedTrait[]
  totalTraits: number
}

export default function TraitBar({ traits, totalTraits }: TraitBarProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {/* Bottom bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-30 bg-[#0A0E1A]/90 backdrop-blur-md border-t border-white/[0.04]"
        initial={{ y: 60 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <div className="max-w-2xl mx-auto px-4 py-2.5 flex items-center gap-3">
          {/* Trait card icons */}
          <div className="flex items-center gap-1.5 flex-1 overflow-x-auto scrollbar-hide">
            {traits.map((trait, i) => (
              <TraitCard key={trait.name} trait={trait} variant="small" index={i} />
            ))}
            {traits.length === 0 && (
              <div className="text-xs text-gray-600">等待发现...</div>
            )}
          </div>

          {/* Count + expand button */}
          <button
            onClick={() => setExpanded(true)}
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:text-gray-300 hover:bg-white/[0.04] transition-colors"
          >
            <span>🃏</span>
            <span>已收集 {traits.length}/{totalTraits}</span>
          </button>
        </div>
      </motion.div>

      {/* Expanded drawer */}
      <AnimatePresence>
        {expanded && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpanded(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0E1A] border-t border-white/[0.08] rounded-t-2xl max-h-[60vh] overflow-y-auto"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-white/20" />
              </div>

              <div className="px-4 pb-6">
                <h3 className="text-lg font-medium text-white mb-1">
                  已收集的特质碎片
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  {traits.length}/{totalTraits} 个特质
                </p>

                {traits.length === 0 ? (
                  <p className="text-sm text-gray-600 text-center py-8">
                    还没有收集到特质碎片，继续探索吧
                  </p>
                ) : (
                  <div className="space-y-2">
                    {traits.map((trait, i) => (
                      <TraitCard
                        key={trait.name}
                        trait={trait}
                        variant="expanded"
                        index={i}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
