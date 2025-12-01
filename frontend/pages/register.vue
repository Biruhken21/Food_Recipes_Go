<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { signup } = useAuth()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const message = ref('')

const handleSignup = async () => {
  if (password.value !== confirmPassword.value) {
    message.value = 'Passwords do not match'
    return
  }

  const res = await signup(name.value, email.value, password.value)
  if (res.token) {
    router.push('/') // redirect after signup
  } else {
    message.value = res.message || 'Signup failed'
  }
}
</script>

<template>
  <div class="max-w-md mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg">
    <h1 class="text-3xl font-bold mb-6 text-center text-orange-500">Sign Up</h1>
    <form @submit.prevent="handleSignup" class="space-y-4">
      <input v-model="name" placeholder="Name" class="input w-full" />
      <input v-model="email" placeholder="Email" class="input w-full" />
      <input v-model="password" type="password" placeholder="Password" class="input w-full" />
      <input v-model="confirmPassword" type="password" placeholder="Confirm Password" class="input w-full" />
      <p class="text-red-500 text-sm">{{ message }}</p>
      <button type="submit" class="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">Register</button>
    </form>
  </div>
</template>
