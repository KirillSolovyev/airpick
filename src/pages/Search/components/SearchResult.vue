<template>
  <div class="p-4 space-y-4 bg-white rounded-2xl">
    <FlightDetals />
    <FlightDetals />
    <AppButton class="py-2 text-white">10 000 ₸</AppButton>
  </div>
</template>

<script setup>
import FlightDetals from './FlightDetails.vue';
import AppButton from '@/components/AppButton.vue';
</script>
