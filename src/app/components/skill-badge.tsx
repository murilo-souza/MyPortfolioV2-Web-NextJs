interface SkillBadgeProps {
  title: string
}

export function SkillBadge({ title }: SkillBadgeProps) {
  return (
    <div className="px-5 py-3 rounded-md bg-skills/50">
      <span className="text-zinc-100 text-sm">{title}</span>
    </div>
  )
}
