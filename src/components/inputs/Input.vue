<script setup lang="ts">
import { mask } from 'vue-the-mask'

defineProps<{
  type: string
  name: string
  label: string
}>()
</script>

<template>
  <div class="flex flex-col space-y-2">
    <label class="text-customGray text-lg font-medium">{{ label }}</label>
    <input :type="type" :name="name" class="p-4 rounded-lg" />
  </div>
</template>
