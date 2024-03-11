'use client'

import { useSearchParams } from 'next/navigation'

export function CurrentSearch() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')
  return (
    <p className="text-lg">
      Resultando para: <span className="font-semibold">{query}</span>
    </p>
  )
}
