<template>
  <div class="p-4 space-y-4 rounded-2xl">
    <header class="space-y-2">
      <h3 class="text-2xl font-black">Нур-Султан → Стамбул</h3>
      <p class="text-xs text-gray-500 font-medium">16 ч 50 мин</p>
    </header>
    <div class="space-y-3">
      <div class="space-y-3">
        <div class="flex items-center">
          <AirlineIcon class="mr-1" />
          <h5>Fly Arystan</h5>
        </div>
        <FlightDetails />
      </div>
      <p class="font-medium">Пересадка в г. Алматы</p>
      <div class="space-y-3">
        <div class="flex items-center">
          <AirlineIcon class="mr-1" />
          <h5>Fly Arystan</h5>
        </div>
        <FlightDetails />
      </div>
    </div>
  </div>
</template>

<script setup>
import AirlineIcon from '@/components/AirlineIcons/AirlineIcon.vue';
import FlightDetails from './FlightDetails.vue';
</script>
