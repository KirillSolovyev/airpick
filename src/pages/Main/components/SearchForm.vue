<template>
  <form class="space-y-4" @submit="$emit('onStartSearch')">
    <div class="space-y-3">
      <DirectionInputGroup />
      <DateInputs />
    </div>
    <AppButton type="submit" variant="main" class="w-full text-white text-2xl">
      Показать рейсы
    </AppButton>
  </form>
</template>

<script setup>
import DirectionInputGroup from './DirectionInputGroup.vue';
import DateInputs from './DateInputs.vue';
import AppButton from '@/components/AppButton.vue';
</script>
