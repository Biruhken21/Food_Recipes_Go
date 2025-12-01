<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { login } = useAuth()
const email = ref('')
const password = ref('')
const message = ref('')

const handleLogin = async () => {
  const res = await login(email.value, password.value)
  if (res.token) {
    router.push('/') // redirect after login
  } else {
    message.value = 'Invalid credentials'
  }
}
</script>

<template>
  <div class="max-w-md mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg">
    <h1 class="text-3xl font-bold mb-6 text-center text-orange-500">Login</h1>
    <form @submit.prevent="handleLogin" class="space-y-4">
      <input v-model="email" placeholder="Email" class="input w-full" />
      <input v-model="password" type="password" placeholder="Password" class="input w-full" />
      <p v-if="message" class="text-red-500 text-sm">{{ message }}</p>
      <button type="submit" class="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">Login</button>
    </form>
  </div>
</template>
