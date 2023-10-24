<script setup lang="ts">
import Input from '../inputs/Input.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <form class="lg:px-10 space-y-2 py-5">
    <Input type="string" label="E-mail" name="email" />
    <Input type="password" label="Password" name="senha" />

    <div>
      <button class="w-full bg-customBlue p-3 rounded-lg text-white text-2xl mt-10">Login</button>
    </div>

    <div class="text-center">
      <RouterLink to="/register" class="text-sm"
        >Do not have an account yet?
        <span class="underline text-customBlue">register</span></RouterLink
      >
    </div>
  </form>
</template>
