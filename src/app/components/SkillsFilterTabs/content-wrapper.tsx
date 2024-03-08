'use client'

import { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
}

export function ContentWrapper({ children }: { children: ReactNode }) {
  const [animationPlayed, setAnimationPlayed] = useState(false)

  const handleAnimationComplete = () => {
    setAnimationPlayed(true)
  }

  return (
    <>
      {animationPlayed ? (
        <div className="flex flex-wrap gap-2">{children}</div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2"
          onAnimationComplete={handleAnimationComplete}
        >
          {children}
        </motion.div>
      )}
    </>
  )
}
