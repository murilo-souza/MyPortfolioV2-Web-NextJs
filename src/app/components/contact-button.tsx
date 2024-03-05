import { ElementType } from 'react'

interface ContactButtonProps {
  redirectTo: string
  icon: ElementType
  title: string
}

export function ContactButton({
  redirectTo,
  icon: Icon,
  title,
}: ContactButtonProps) {
  return (
    <a href={redirectTo} className="flex gap-3 items-center" target="_blank">
      <div className="rounded-md bg-violet-600">
        <Icon className="h-12 w-12 text-zinc-200 p-1" />
      </div>
      <span className="text-xl font-medium text-zinc-100">{title}</span>
    </a>
  )
}
