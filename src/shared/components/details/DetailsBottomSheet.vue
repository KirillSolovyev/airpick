<template>
  <AppBottomSheet name="details-bottom-sheet" class="details-bottom-sheet">
    <template #title>
      <h2 class="text-lg font-black text-center">Детали рейса</h2>
    </template>
    <template #default>
      <div
        class="flex-grow min-h-[50vh] mt-2 mb-4 px-4 pb-4 space-y-4 touch-pan-y"
      >
        <DirectionDetails
          v-for="(flight, i) in offer.flights"
          :key="i"
          class="bg-white"
          :flight="flight"
        />
      </div>
      <div class="sticky bottom-4 px-4">
        <slot name="footer" />
      </div>
    </template>
  </AppBottomSheet>
</template>

<script setup>
import AppBottomSheet from '@/components/AppBottomSheet/AppBottomSheet.vue';
import DirectionDetails from './DirectionDetails.vue';

defineProps({
  offer: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.details-bottom-sheet {
  --app-bottom-sheet-bg-color: theme('colors.gray.100');
}
</style>
