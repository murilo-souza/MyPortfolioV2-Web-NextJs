import { CurrentSearch } from './current-search'
import { PageStructure } from './page-structure'

interface SearchProps {
  searchParams: {
    q: string
  }
}

export default function Search({ searchParams }: SearchProps) {
  const { q } = searchParams

  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Busca
      </h1>
      <CurrentSearch />
      <div className="w-full h-px bg-zinc-600 hidden lg:block" />

      <PageStructure query={q} />
    </>
  )
}
