<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center p-4">
    <DSConsole 
      :theme="currentTheme" 
      :lang="currentLang"
      @language-change="handleLanguageChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DSConsole from './components/DSConsole.vue'

const currentLang = ref('es')
const currentTheme = ref(null)

const handleLanguageChange = (lang) => {
  currentLang.value = lang
}

onMounted(() => {
  // Initialize random theme with DS official colors
  const themes = ['black', 'slate', 'maroon', 'red', 'pink', 'orange', 'yellow', 'neonyellow', 'lime', 'green', 'teal', 'turquoise', 'blue', 'navy', 'darkpurple', 'magenta', 'fuschia']
  currentTheme.value = themes[Math.floor(Math.random() * themes.length)]
})
</script>

<style>
@import './styles/main.css';
</style>
