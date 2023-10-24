<script setup lang="ts">
import Input from '../inputs/Input.vue'
</script>

<template>
  <div class="lg:px-10 space-y-2">
    <Input type="string" label="E-mail" name="email" />
    <Input type="string" label="Password" name="senha" />

    <div>
      <button class="w-full bg-customBlue p-3 rounded-lg text-white text-2xl mt-10">Entrar</button>
    </div>
  </div>
</template>
