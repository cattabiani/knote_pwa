<template>
  <div>
    <h1>Input Display App</h1>
    <input v-model="data_s0" placeholder="Type something..." @input="saveToLocalStorage">
    <p v-if="data_s0">{{ data_s0 }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Define reactive variables using ref()
const data_s0 = ref('')

// Function to save user input to localStorage
const saveToLocalStorage = () => {
  localStorage.setItem('data_s0', data_s0.value)
}

// Retrieve the stored input on app load
onMounted(() => {
  const storedData = localStorage.getItem('data_s0')
  if (storedData) {
    data_s0.value = storedData
  }
})

</script>

<style>
/* Add any custom styles here */
</style>
