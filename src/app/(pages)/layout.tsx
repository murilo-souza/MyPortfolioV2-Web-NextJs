import { ReactNode } from 'react'
import { ApolloContextProvider } from '../context/apolloContext'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <ApolloContextProvider>
      <div>{children}</div>
    </ApolloContextProvider>
  )
}
