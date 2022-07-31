<template>
  <AppBottomSheet name="details-bottom-sheet" class="details-bottom-sheet">
    <template #title>
      <h2 class="text-lg font-black text-center">Детали рейса</h2>
    </template>
    <template #default>
      <div class="min-h-[75vh] mt-2 px-4 pb-4 space-y-4 touch-pan-y">
        <DirectionDetails class="bg-white" />
        <DirectionDetails class="bg-white" />
        <AppButton
          class="sticky bottom-1 w-full text-white"
          @click="$emit('onProceedToBooking')"
        >
          Продолжить
        </AppButton>
      </div>
    </template>
  </AppBottomSheet>
</template>

<script setup>
import AppBottomSheet from '@/components/AppBottomSheet/AppBottomSheet.vue';
import AppButton from '@/components/AppButton.vue';
import DirectionDetails from './DirectionDetails.vue';
</script>

<style scoped>
.details-bottom-sheet {
  --app-bottom-sheet-bg-color: theme('colors.gray.100');
}
</style>
