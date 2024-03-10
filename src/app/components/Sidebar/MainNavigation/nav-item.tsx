import Link from 'next/link'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
  path: string
  onClose: () => void
}

export function NavItem({ title, icon: Icon, path, onClose }: NavItemProps) {
  return (
    <Link
      href={path}
      onClick={onClose}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800"
    >
      <Icon className="h-5 w-5 text-zinc-100" />
      <span className="font-medium text-zinc-700  dark:text-zinc-100 ">
        {title}
      </span>
    </Link>
  )
}
