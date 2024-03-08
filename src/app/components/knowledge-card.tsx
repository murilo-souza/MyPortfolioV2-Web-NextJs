interface KnowledgeCardProps {
  title: string
  description: string
  startDate: string
  endDate: string
  college: string
}

export function KnowledgeCard({
  title,
  description,
  startDate,
  endDate,
  college,
}: KnowledgeCardProps) {
  return (
    <div className="border border-zinc-600 p-4 rounded-md max-w-[40vw]">
      <div className="mb-5">
        <h3 className="text-zinc-200 text-xl font-semibold">{title}</h3>
        <span className="text-zinc-400 text-sm">
          {startDate} - {endDate} | {college}
        </span>
      </div>

      <p className="text-zinc-200">{description}</p>
    </div>
  )
}
