<template>
  <div class="flex -space-x-2">
    <span
      class="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-gray-300 font-medium"
    >
      +2
    </span>
    <AirlineIcon v-for="i in 2" :key="i" />
  </div>
</template>

<script setup>
import AirlineIcon from './AirlineIcon.vue';


</script>
