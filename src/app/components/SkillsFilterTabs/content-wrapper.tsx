import { ReactNode } from 'react'
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
