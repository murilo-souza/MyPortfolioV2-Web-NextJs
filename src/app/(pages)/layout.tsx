'use client'

import { ReactNode } from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
        {children}
      </div>
    </ApolloProvider>
  )
}
