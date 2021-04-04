<template>
  <nav-bar />
  <hero-section />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar/NavBar.vue'
import HeroSection from "./components/Hero/HeroSection.vue"

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    HeroSection
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* body {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffcd0a' fill-opacity='0.8' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
} */
</style>