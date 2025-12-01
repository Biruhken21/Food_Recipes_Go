<template>
  <div class="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-900 font-sans">
    <!-- Header -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <svg class="w-10 h-10 text-teal-500 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="url(#logoGradient)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#14b8a6"/>
                <stop offset="100%" stop-color="#06b6d4"/>
              </linearGradient>
            </defs>
            <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5" fill="rgba(20,184,166,0.15)"/>
            <path d="M7 14l3-3 3 3 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-2xl font-bold text-teal-600 group-hover:text-teal-700 transition-colors duration-300">My Recipes</span>
        </NuxtLink>

        <div class="absolute left-1/2 transform -translate-x-1/2">
          <NuxtLink to="/" class="text-xl font-bold text-teal-600 hover:text-teal-700 transition-colors duration-300">Home</NuxtLink>
        </div>

        <nav class="flex items-center space-x-4">
          <NuxtLink to="/login" class="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg">Login</NuxtLink>
          <NuxtLink to="/register" class="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 shadow-lg">Signup</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Page Content -->
    <main class="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="mt-12 border-t border-gray-200 bg-white">
      <div class="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <span>© {{ new Date().getFullYear() }} My Recipes. All rights reserved.</span>
        <div class="flex space-x-4 mt-2 md:mt-0">
          <a href="#" class="hover:text-teal-500 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-teal-500 transition-colors">Terms</a>
          <a href="#" class="hover:text-teal-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  </div>
</template>
