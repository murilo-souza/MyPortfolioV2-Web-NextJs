import * as Tabs from '@radix-ui/react-tabs'
import { ReactNode } from 'react'

interface TabContentProps {
  children: ReactNode
  value: string
}

export function TabContent({ value, children }: TabContentProps) {
  return (
    <Tabs.Content value={value} className="mt-5">
      {children}
    </Tabs.Content>
  )
}
