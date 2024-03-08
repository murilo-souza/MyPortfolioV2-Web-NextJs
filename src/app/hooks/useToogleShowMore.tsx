import { useState } from 'react'

export function useToogleShowMore(string: string, maxLength: number) {
  const [showMore, setShowMore] = useState(() => {
    return string.length <= maxLength
  })

  const toogleShowMore = () => {
    setShowMore((state) => !state)
  }

  const text = showMore ? string : string.slice(0, maxLength) + '...'

  return { text, toogleShowMore, isShowingMore: showMore }
}
