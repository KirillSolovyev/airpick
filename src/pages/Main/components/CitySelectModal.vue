<template>
  <AppBottomSheet :name="name">
    <template #header>
      <h2 class="text-lg font-black text-center">Выбор города</h2>
    </template>
    <template #default>
      <ul
        class="flex flex-col min-h-[75vh] mt-2 px-4 pb-4 touch-pan-y font-black"
      >
        <button
          v-for="(city, i) in DICT.CITIES"
          :key="i"
          type="button"
          class="p-4 border-b text-left"
          @click="$emit('onCitySelect', city.code)"
        >
          {{ city.name }}
        </button>
      </ul>
    </template>
  </AppBottomSheet>
</template>

<script setup>
import AppBottomSheet from '@/components/AppBottomSheet/AppBottomSheet.vue';
import { DICT } from '@/shared/config';

defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>
