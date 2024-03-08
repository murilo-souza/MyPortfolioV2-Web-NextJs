import { ReactNode } from 'react'
interface ContentWrapperProps {
  children: ReactNode
  title: string
}

export function ContentWrapper({ title, children }: ContentWrapperProps) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="font-medium text-zinc-200 text-2xl">{title}</h2>
      {children}
    </div>
  )
}
