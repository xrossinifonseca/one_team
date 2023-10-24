<script setup lang="ts">
import LoginForm from '../components/login/LoginForm.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center p-1 lg:p-5 bg-customBlue">
    <div class="max-w-[1500px] w-full min-h-screen grid lg:grid-cols-2 place-items-center relative">
      <img src="../assets/teams-goals.svg" class="w-4/5" />
      <div class="max-w-[600px] w-full bg-customGraySecundary p-5 rounded-xl mt-10">
        <h1 class="text-center text-2xl lg:text-4xl text-customBlue mb-5 font-medium">Login</h1>

        <!-- form -->

        <LoginForm />
      </div>
    </div>
  </div>
</template>
