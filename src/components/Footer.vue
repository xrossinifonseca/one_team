<script setup lang="ts"></script>

<template>
  <div
    class="min-h-[300px] lg:min-h-[200px] bg-customBlue p-5 grid divide-x-reverse lg:grid-cols-3 place-items-center relative"
  >
    <div class="text-center lg:text-start">
      <h3 class="text-white text-lg">Quem somos?</h3>

      <ul class="text-sm text-white">
        <li>Sobre</li>
        <li>Contato</li>
        <li>Política de privacidade</li>
        <li>Termos de serviços</li>
      </ul>
    </div>

    <div class="">
      <img src="../assets/logo.png" class="w-24 lg:w-40" />
    </div>

    <ul class="text-white underline text-center">
      <li>Login</li>
      <li>Register</li>
    </ul>

    <div class="absolute bottom-2 text-center w-full left-0 text-sm text-slate-800">
      <a>Developed by <span class="underline">Rossini Fonseca</span></a>
    </div>
  </div>
</template>
