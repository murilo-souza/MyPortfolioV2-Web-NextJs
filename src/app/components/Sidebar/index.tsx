'use client'

import { twMerge } from 'tailwind-merge'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Logo } from './logo'
import { Button } from '../button'
import { CornerDownLeft, Download, Menu, Search } from 'lucide-react'
import * as Input from '../input'
import { MainNavigation } from './MainNavigation'
import { useState, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

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

    setMenuOpen(false)
  }

  return (
    <Collapsible.Root
      className={twMerge(
        'fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0',
        'lg:right-auto lg:w-80 lg:overflow-y-auto lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:[&::-webkit-scrollbar]:hidden',
        'dark:border-zinc-800 dark:bg-zinc-900',
      )}
      open={menuOpen}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <form onSubmit={handleSearch}>
          <Input.Root>
            <Input.Prefix>
              <Search className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>

            <Input.Control
              name="q"
              placeholder="Pesquisar tecnologia"
              defaultValue={query ?? ''}
            />

            <Input.Suffix type="submit">
              <CornerDownLeft className="h-5 w-5 text-zinc-500" />
            </Input.Suffix>
          </Input.Root>
        </form>

        <MainNavigation onClose={() => setMenuOpen(false)} />

        <div className="mt-auto">
          <a
            href="/curriculo_frontend.pdf"
            className="flex items-center justify-center gap-3 bg-violet-600 px-5 py-4 rounded-md"
            download
          >
            <Download className="h-5 w-5 text-zinc-200" />
            <span className="font-medium text-zinc-200">Download meu CV</span>
          </a>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
