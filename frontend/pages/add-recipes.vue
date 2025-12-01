<template>
  <div class="max-w-3xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-6 text-orange-500">Add a New Recipe 🍴</h1>

    <form @submit.prevent="submitRecipe" class="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <!-- Title -->
      <div>
        <label class="block font-semibold mb-2">Recipe Title</label>
        <input v-model="recipe.title" type="text" required class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none" />
      </div>

      <!-- Creator -->
      <div>
        <label class="block font-semibold mb-2">Creator</label>
        <input v-model="recipe.creator" type="text" required class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none" />
      </div>

      <!-- Category -->
      <div>
        <label class="block font-semibold mb-2">Category</label>
        <select v-model="recipe.category" required class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none">
          <option value="">Select Category</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Desserts</option>
        </select>
      </div>

      <!-- Prep Time -->
      <div>
        <label class="block font-semibold mb-2">Preparation Time (minutes)</label>
        <input v-model.number="recipe.time" type="number" min="1" required class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none" />
      </div>

      <!-- Ingredients -->
      <div>
        <label class="block font-semibold mb-2">Ingredients (comma separated)</label>
        <input v-model="ingredientsInput" type="text" placeholder="e.g. pasta, egg, cheese" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none" />
      </div>

      <!-- Description -->
      <div>
        <label class="block font-semibold mb-2">Description</label>
        <textarea v-model="recipe.description" rows="4" required class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"></textarea>
      </div>

      <!-- Image -->
      <div>
        <label class="block font-semibold mb-2">Image URL</label>
        <input v-model="recipe.image" type="url" placeholder="https://example.com/image.jpg" class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none" />
      </div>

      <!-- Submit -->
      <div class="flex justify-end">
        <button type="submit" class="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg shadow-lg hover:from-orange-600 hover:to-pink-600 transition">
          Add Recipe
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const recipe = reactive({
  title: '',
  creator: '',
  category: '',
  time: null,
  ingredients: [],
  description: '',
  image: '',
})

const ingredientsInput = ref('')

function submitRecipe() {
  recipe.ingredients = ingredientsInput.value.split(',').map(i => i.trim())
  console.log('Recipe submitted:', recipe)
  alert('Recipe added successfully! 🚀')
}
</script>
