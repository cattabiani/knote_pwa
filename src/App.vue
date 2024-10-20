<template>
  <div>
    <h1>Simple Notes App</h1>
    <input v-model="newNote" placeholder="Type a new note..." @keydown.enter="addNote">
    <button @click="addNote">Add Note</button>

    <ul>
      <li v-for="(note, index) in notes" :key="index">
        <input v-model="note.text" />
        <button @click="deleteNote(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Reactive variables
const notes = ref([]) // Array to store notes
const newNote = ref('') // To hold input for new note

// Function to add a note
const addNote = () => {
  if (newNote.value.trim()) { // Ensure input isn't empty
    notes.value.push({ text: newNote.value }) // Add note to array
    newNote.value = '' // Clear the input field
  }
}

// Function to delete a note
const deleteNote = (index) => {
  notes.value.splice(index, 1) // Remove note from array
}

// Function to save notes to localStorage
const saveToLocalStorage = () => {
  localStorage.setItem('notes', JSON.stringify(notes.value))
}

const saveToLocalStorageIfHidden = () => {
    if (document.visibilityState === 'hidden') {
      saveToLocalStorage()
    }
  }

// Retrieve stored notes when the app loads
onMounted(() => {
  const storedNotes = localStorage.getItem('notes')
  if (storedNotes) {
    notes.value = JSON.parse(storedNotes) // Load notes from localStorage
  }

  document.addEventListener('visibilitychange', saveToLocalStorageIfHidden)
  window.addEventListener('beforeunload', saveToLocalStorage)
})

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', saveToLocalStorageIfHidden)
  window.removeEventListener('beforeunload', saveToLocalStorage)
})

</script>

<style>
/* Add any custom styles here */
</style>
