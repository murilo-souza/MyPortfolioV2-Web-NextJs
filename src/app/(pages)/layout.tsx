'use client'

import { ReactNode } from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <div>{children}</div>
    </ApolloProvider>
  )
}
