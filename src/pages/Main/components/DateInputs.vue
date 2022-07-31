<template>
  <div class="flex bg-white divide-x rounded-2xl overflow-hidden">
    <SearchFormButton class="w-1/2 text-gray-400">Дата туда</SearchFormButton>
    <SearchFormButton class="w-1/2 text-gray-400">
      Дата обратно
    </SearchFormButton>
  </div>
</template>

<script setup>
import SearchFormButton from './SearchFormButton.vue';
</script>
