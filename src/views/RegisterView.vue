<script setup lang="ts">
import RegisterForm from '../components/register/RegisterForm.vue'
</script>

<template>
  <div class="flex justify-center p-1 lg:p-5 bg-customBlue">
    <div class="max-w-[1500px] w-full min-h-screen grid lg:grid-cols-2 place-items-center relative">
      <img src="../assets/teams-goals.svg" class="w-4/5" />
      <div class="max-w-[600px] w-full bg-customGraySecundary p-5 rounded-xl mt-10">
        <h1 class="text-center text-2xl lg:text-4xl text-customBlue mb-5 font-medium">
          Create account
        </h1>

        <!-- form -->

        <RegisterForm />
      </div>
    </div>
  </div>
</template>
