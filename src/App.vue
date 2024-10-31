<template>
  <v-container>
    <v-row align="center" justify="space-between" class="mb-1">
      <h1>kNote</h1>
      <v-btn icon @click="addNote">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>

    <v-list lines="one">
      <v-list-item v-for="(note, index) in reversedNotes" :key="index">
        <v-row align="center" justify="space-between" class="mr-2 ml-2">
          <v-btn icon @click="toggleNoteDone(reversedIndex(index))">
            <v-icon>mdi-check-circle-outline</v-icon>
          </v-btn>
          <v-textarea
            v-model="note.text"
            align="center"
            placeholder="new note"
            :class="{ 'text-decoration-line-through': note.done }"
            rows="1"
            auto-grow
            variant="solo"
            class="ml-2 mr-2 mt-5"
          />
          <v-btn icon @click="deleteNote(reversedIndex(index))">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-row>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

// Reactive variables
const notes = ref([]);

const reversedNotes = computed(() => {
  return notes.value.slice().reverse(); // Create a shallow copy and reverse it
});

const reversedIndex = (index) => {
  return notes.value.length - 1 - index;
};

// Function to add a note
const addNote = () => {
  notes.value.push({ text: "", done: false });
};

const toggleNoteDone = (index) => {
  notes.value[index].done = !notes.value[index].done; // Toggle done state
};

// Function to delete a note
const deleteNote = (index) => {
  notes.value.splice(index, 1);
};

// Function to save notes to localStorage
const saveToLocalStorage = () => {
  localStorage.setItem("notes", JSON.stringify(notes.value));
};

// Save data when the app becomes inactive
const saveToLocalStorageIfHidden = () => {
  if (document.visibilityState === "hidden") {
    saveToLocalStorage();
  }
};

// Retrieve stored notes
onMounted(() => {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes.value = JSON.parse(storedNotes);
  }
  document.addEventListener("visibilitychange", saveToLocalStorageIfHidden);
  window.addEventListener("beforeunload", saveToLocalStorage);
});

onBeforeUnmount(() => {
  document.removeEventListener("visibilitychange", saveToLocalStorageIfHidden);
  window.removeEventListener("beforeunload", saveToLocalStorage);
});
</script>

<style>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
