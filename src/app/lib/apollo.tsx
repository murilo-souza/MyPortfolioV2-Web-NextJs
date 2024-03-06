import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cleamgjim26km01ufazo7781v/master',

  cache: new InMemoryCache(),
})
