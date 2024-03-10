import { useToogleShowMore } from '../hooks/useToogleShowMore'

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
  const { text, isShowingMore, toogleShowMore } = useToogleShowMore(
    description,
    166,
  )

  return (
    <div className="border border-zinc-600 p-4 rounded-md lg:max-w-[40vw] ">
      <div className="mb-5">
        <h3 className="text-zinc-200 text-xl font-semibold">{title}</h3>
        <span className="text-zinc-400 text-sm">
          {startDate} - {endDate} | {college}
        </span>
      </div>

      <p className="text-zinc-200">
        {text}
        {description.length > 166 && (
          <button className="text-violet-400" onClick={toogleShowMore}>
            {isShowingMore ? 'Mostar menos' : 'Mostrar mais'}
          </button>
        )}
      </p>
    </div>
  )
}
