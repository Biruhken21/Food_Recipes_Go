import { ref } from 'vue'
import { useRuntimeConfig } from '#app'

const token = ref(localStorage.getItem('jwt') || null)
const isAuthenticated = ref(!!token.value)

export const useAuth = () => {
  const config = useRuntimeConfig()
  const hasuraUrl = config.public.apiUrl

  // SignUp
  const signup = async (username: string, email: string, password: string) => {
    const mutation = `
      mutation Signup($input: SignupInput!) {
        signup(input: $input) {
          token
          message
        }
      }
    `
    const variables = { input: { username, email, password } }

    const res: any = await $fetch(hasuraUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: mutation, variables }),
    })

    const signupResponse = res.data.signup // ✅ match Hasura mutation
    if (signupResponse.token) {
      token.value = signupResponse.token
      localStorage.setItem('jwt', token.value)
      isAuthenticated.value = true
    }

    return signupResponse
  }

  // Login
  const login = async (email: string, password: string) => {
    const mutation = `
      mutation Login($input: LoginInput!) {
        login(input: $input) {
          token
        }
      }
    `
    const variables = { input: { email, password } }

    const res: any = await $fetch(hasuraUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: mutation, variables }),
    })

    const loginResponse = res.data.login // ✅ match Hasura mutation
    if (loginResponse.token) {
      token.value = loginResponse.token
      localStorage.setItem('jwt', token.value)
      isAuthenticated.value = true
    }

    return loginResponse
  }

  const logout = () => {
    token.value = null
    localStorage.removeItem('jwt')
    isAuthenticated.value = false
  }

  return { token, isAuthenticated, signup, login, logout }
}
