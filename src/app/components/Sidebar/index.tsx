'use client'

import { twMerge } from 'tailwind-merge'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Logo } from './logo'
import { Button } from '../button'
import { Menu, Search } from 'lucide-react'
import * as Input from '../input'
import { MainNavigation } from './MainNavigation'

export function Sidebar() {
  return (
    <Collapsible.Root
      className={twMerge(
        'fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0',
        'lg:right-auto lg:w-80 lg:overflow-y-auto lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:[&::-webkit-scrollbar]:hidden',
        'dark:border-zinc-800 dark:bg-zinc-900',
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <MainNavigation />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
