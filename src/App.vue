<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <div class="flex justify-center">
      <Nav />
    </div>
  </header>

  <!-- main -->
  <RouterView />
  {{ cout }}
  <!-- footer -->

  <footer>
    <Footer />
  </footer>
</template>

<style scoped></style>
