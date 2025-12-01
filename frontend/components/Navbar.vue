<template>
  <nav class="bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-md p-4 flex justify-between items-center">
    <NuxtLink to="/" class="font-extrabold text-2xl hover:text-gray-100">🍽 Food Recipes</NuxtLink>
    <div class="space-x-6 flex items-center">
      <NuxtLink to="/" class="hover:text-gray-200">Home</NuxtLink>
      <NuxtLink to="/login" class="hover:text-gray-200">Login</NuxtLink>
      <NuxtLink to="/register" class="bg-white text-orange-500 px-4 py-1 rounded hover:bg-gray-100 transition">Sign Up</NuxtLink>
    </div>
  </nav>
</template>
