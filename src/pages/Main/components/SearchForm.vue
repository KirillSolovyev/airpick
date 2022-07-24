<template>
  <section class="space-y-4">
    <div class="space-y-3">
      <DirectionInputGroup />
      <DateInputs />
    </div>
    <AppButton variant="main" class="w-full text-white text-2xl">
      Показать рейсы
    </AppButton>
  </section>
</template>

<script setup>
import DirectionInputGroup from './DirectionInputGroup.vue';
import DateInputs from './DateInputs.vue';
import AppButton from '@/components/AppButton.vue';
</script>
