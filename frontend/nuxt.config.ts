// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  components: true,
  compatibilityDate: '2025-09-19',
  vite: { server: { fs: { strict: false } } },
  runtimeConfig: {
    public: {
     hasuraUrl: process.env.API_URL || "http://localhost:8080/v1/graphql",
      authServiceUrl: process.env.AUTH_SERVICE_URL || "http://localhost:3000",
    },
  },
})
