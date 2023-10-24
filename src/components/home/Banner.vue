<template>
  <div class="w-full flex justify-center">
    <div
      class="w-full max-w-[1500px] flex flex-col items-center justify-center lg:justify-around lg:flex-row gap-5 p-5"
    >
      <div class="space-y-5">
        <h1 class="text-customGray text-4xl lg:text-6xl font-semibold text-center lg:text-start">
          Form your team <br />
          of innovators
        </h1>

        <p class="text-customGray text-lg text-center lg:text-start lg:text-xl">
          Find people with innovative ideas <br />
          and tools for your team.
        </p>
      </div>

      <div>
        <img src="../../assets/friends.png" alt="friends" />
      </div>

      <div class="w-full grid place-items-center lg:hidden">
        <button class="bg-customBlue p-2 text-white rounded-xl w-32">Get started</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
