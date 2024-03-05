import * as Tabs from '@radix-ui/react-tabs'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TabContentProps {
  children: ReactNode
  value: string
}

export function TabContent({ value, children }: TabContentProps) {
  return (
    <Tabs.Content value={value} className={twMerge('mt-5')}>
      {children}
    </Tabs.Content>
  )
}
