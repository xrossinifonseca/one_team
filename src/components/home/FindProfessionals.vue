<script setup lang="ts">
import datascience from '../../assets/datascience.png'
import developers from '../../assets/developers.png'
import uxui from '../../assets/ux_e_ui.png'
import devops from '../../assets/devops.png'

const listEmployes = [
  {
    src: datascience,
    name: 'Data science'
  },
  {
    src: developers,
    name: 'Developers'
  },
  {
    src: uxui,
    name: 'UX & UI'
  },
  {
    src: devops,
    name: 'DevOps'
  }
]
</script>

<template lang="">
  <div class="mt-10">
    <h1 class="text-customGray text-xl lg:text-3xl text-center font-semibold">
      find the best professionals
    </h1>

    <div class="mt-10 flex flex-col lg:flex-row justify-center place-items-center gap-10">
      <div
        v-for="list in listEmployes"
        :key="list.src"
        class="bg-white grid place-items-center w-[250px] h-[250px] rounded-xl shadow-2xl"
      >
        <img :src="list.src" :alt="list.name" class="bg-transparent" />

        <h1 class="bg-transparent text-customBlue text-lg font-semibold">{{ list.name }}</h1>
      </div>
    </div>
  </div>
</template>
