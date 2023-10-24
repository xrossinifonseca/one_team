<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-[1500px] w-full p-2 lg:p-5 flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <RouterLink to="/">
        <img src="../assets/logo-preta.png" class="w-24 lg:w-40" />
      </RouterLink>
    </div>
    <div class="space-x-2 lg:space-x-5">
      <RouterLink to="/login">
        <span class="text-customBlue border border-customBlue px-4 py-1 rounded-xl lg:text-xl">
          Login
        </span>
      </RouterLink>
      <RouterLink to="/register" class="text-customGray font-normal lg:text-xl underline"
        >Register</RouterLink
      >
    </div>
  </div>
</template>
