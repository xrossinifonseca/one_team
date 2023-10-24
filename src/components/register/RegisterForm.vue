<script setup lang="ts">
import Input from '../inputs/Input.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <form class="lg:px-10 py-5 space-y-2">
    <Input type="string" label="Name" name="name" />
    <Input type="string" label="E-mail" name="email" />
    <Input type="string" label="Password" name="password" />
    <Input type="string" label="Confirm password" name="confirm_password" />

    <p class="text-sm text-slate-500">
      By clicking register you are accepting our terms of use and private policy
    </p>

    <div>
      <button class="w-full bg-customBlue p-3 rounded-lg text-white text-2xl mt-5">Continue</button>
    </div>

    <div class="text-center">
      <RouterLink to="/login" class="text-sm"
        >Already have an account? <span class="underline text-customBlue">Login</span></RouterLink
      >
    </div>
  </form>
</template>
