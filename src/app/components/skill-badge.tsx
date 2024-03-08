import { motion } from 'framer-motion'

interface SkillBadgeProps {
  title: string
}

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}
export function SkillBadge({ title }: SkillBadgeProps) {
  return (
    <motion.div variants={item} className="px-5 py-3 rounded-md bg-skills/50">
      <span className="text-zinc-100 text-sm">{title}</span>
    </motion.div>
  )
}
