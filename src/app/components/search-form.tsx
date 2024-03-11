import { CornerDownLeft, Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'
import { twMerge } from 'tailwind-merge'

interface SearchFormProps {
  closeModal: () => void
}

export function SearchForm({ closeModal }: SearchFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)

    closeModal()
  }
  return (
    <form onSubmit={handleSearch}>
      <div
        className={twMerge(
          'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
          'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
          'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
        )}
      >
        <div>
          <Search className="h-5 w-5 text-zinc-500" />
        </div>

        <input
          name="q"
          placeholder="Pesquisar tecnologia"
          defaultValue={query ?? ''}
          className="flex-1 lg:max-w-[200px] border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
        />

        <button type="submit">
          <CornerDownLeft className="h-5 w-5 text-zinc-500" />
        </button>
      </div>
    </form>
  )
}
