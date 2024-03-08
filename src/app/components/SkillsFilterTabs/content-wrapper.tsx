import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

export function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-2"
    >
      {children}
    </motion.div>
  )
}
