import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const httpLink = new HttpLink({
    uri: config.public.hasuraUrl,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt') || ''}`
    }
  })

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })

  nuxtApp.provide('apollo', apolloClient)
})
