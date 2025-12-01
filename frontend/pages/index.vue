<template>
  <div class="max-w-6xl mx-auto px-4 py-10 space-y-10">
    <!-- Header -->
    <header class="text-center mb-10">
      <h1 class="text-5xl font-extrabold mb-4 text-orange-500">Discover Delicious Recipes 🍲</h1>
      <p class="text-gray-700 text-lg">Browse, filter, and enjoy recipes shared by our community.</p>
    </header>

    <!-- Add Recipe Button -->
    <div class="flex justify-end mb-6">
      <NuxtLink
        to="/add-recipes"
        class="px-5 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg shadow-lg hover:from-orange-600 hover:to-pink-600 transition"
      >
        + Add Recipe
      </NuxtLink>
    </div>

    <!-- Search & Filters -->
    <section class="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
      <!-- Search by Title -->
      <input
        type="text"
        v-model="filters.search"
        placeholder="Search recipes by title..."
        class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
      />

      <!-- Filter by Category -->
      <select v-model="filters.category" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400">
        <option value="">All Categories</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>

      <!-- Filter by Creator -->
      <select v-model="filters.creator" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400">
        <option value="">All Creators</option>
        <option v-for="creator in creators" :key="creator" :value="creator">{{ creator }}</option>
      </select>

      <!-- Filter by Preparation Time -->
      <select v-model="filters.time" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400">
        <option value="">Any Time</option>
        <option value="15">Up to 15 min</option>
        <option value="30">Up to 30 min</option>
        <option value="60">Up to 1 hour</option>
      </select>
    </section>

    <!-- Categories -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold mb-4">Browse by Categories</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="cat in categories"
          :key="cat"
          @click="filters.category = cat"
          class="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-6 text-center cursor-pointer hover:scale-105 transform transition-all"
        >
          {{ cat }}
        </div>
      </div>
    </section>

    <!-- Recipes List -->
    <section>
      <h2 class="text-2xl font-bold mb-4">Popular Recipes</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
        >
          <img :src="recipe.image" class="w-full h-48 object-cover" />
          <div class="p-4 space-y-2">
            <h3 class="text-xl font-semibold">{{ recipe.title }}</h3>
            <p class="text-gray-600 text-sm">By {{ recipe.creator }}</p>
            <p class="text-gray-500 text-sm">Prep Time: {{ recipe.time }} min</p>
            <p class="text-gray-700 text-sm">{{ recipe.description }}</p>
            <div class="mt-2 flex flex-wrap gap-2">
              <span v-for="ingredient in recipe.ingredients" :key="ingredient" class="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                {{ ingredient }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    creator: 'Chef John',
    category: 'Dinner',
    time: 20,
    ingredients: ['pasta', 'egg', 'cheese', 'pancetta'],
    description: 'A classic Italian pasta dish with creamy sauce and pancetta.',
    image: 'https://source.unsplash.com/400x250/?spaghetti',
  },
  {
    id: 2,
    title: 'Caesar Salad',
    creator: 'Chef Anna',
    category: 'Lunch',
    time: 15,
    ingredients: ['lettuce', 'croutons', 'parmesan'],
    description: 'Fresh romaine lettuce with crunchy croutons and parmesan cheese.',
    image: 'https://source.unsplash.com/400x250/?salad',
  },
  {
    id: 3,
    title: 'Chocolate Cake',
    creator: 'Chef Mia',
    category: 'Desserts',
    time: 60,
    ingredients: ['chocolate', 'flour', 'egg', 'sugar'],
    description: 'Rich and moist chocolate cake topped with ganache.',
    image: 'https://source.unsplash.com/400x250/?dessert',
  },
]

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Desserts']
const creators = ['Chef John', 'Chef Anna', 'Chef Mia']

const filters = reactive({
  search: '',
  category: '',
  creator: '',
  time: '',
})

const filteredRecipes = computed(() => {
  return recipes.filter(recipe => {
    return (
      (!filters.search || recipe.title.toLowerCase().includes(filters.search.toLowerCase())) &&
      (!filters.category || recipe.category === filters.category) &&
      (!filters.creator || recipe.creator === filters.creator) &&
      (!filters.time || recipe.time <= Number(filters.time))
    )
  })
})
</script>
