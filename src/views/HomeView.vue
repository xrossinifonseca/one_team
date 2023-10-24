<script setup lang="ts">
import Banner from '../components/home/Banner.vue'
import FindProfessionals from '../components/home/FindProfessionals.vue'
import Nav from '../components/Nav.vue'
import About from '../components/home/About.vue'
import FindPartner from '../components/home/FindPartner.vue'
</script>

<template>
  <div class="mb-20">
    <div class="flex justify-center">
      <Nav />
    </div>

    <main>
      <Banner />
      <FindProfessionals />
      <About />
      <FindPartner />
    </main>
  </div>
</template>
