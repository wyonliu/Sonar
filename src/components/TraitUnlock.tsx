'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface TraitUnlockProps {
  traitName: string
  visible: boolean
}

export default function TraitUnlock({ traitName, visible }: TraitUnlockProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <motion.div
              className="text-sm text-gray-400 mb-2 tracking-wider"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15 }}
            >
              发现了你的一个特质
            </motion.div>
            <motion.div
              className="text-2xl md:text-3xl font-light text-white tracking-wider"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{
                textShadow: '0 0 30px rgba(99, 102, 241, 0.6), 0 0 60px rgba(99, 102, 241, 0.3)',
              }}
            >
              {traitName}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
