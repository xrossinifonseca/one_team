<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
import { storeToRefs } from 'pinia'
// import Footer from './components/Footer.vue'
import { useCounter } from './store/counter'
import { ref } from 'vue'

const click = ref(false)
</script>

<template>
  <!-- main -->
  <!-- <RouterView /> -->
  <!-- footer -->

  <div class="min-h-screen bg-slate-800 grid place-items-center overflow-hidden p-5 relative">
    <div
      class="flex flex-col items-center justify-center"
      :class="
        click === true
          ? 'transition-all ease-out duration-500 translate-y-0 h-1/2'
          : 'translate-y-[2000px] h-1/2'
      "
    >
      <img src="./assets//dedo.svg" />

      <h1 class="text-3xl text-white font-semibold">Boa noite, otário!</h1>
    </div>

    <button
      @click="click = true"
      :class="
        click === false &&
        ' p-2  absolute shadow-lg bg-blue-700 text-center text-white font-semibold text-3xl rounded-lg'
      "
    >
      click aqui 👌
    </button>
  </div>

  <!-- <footer>
    <FooterComponent />
  </footer> -->
</template>

<style scoped></style>
