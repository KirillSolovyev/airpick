<template>
  <div class="flex space-x-1">
    <div class="w-16 space-y-1 flex-shrink-0">
      <p>{{ direction.time }}</p>
      <p class="text-xs text-gray-500 font-medium">
        {{ direction.dayOfMonth }}, {{ direction.dayOfWeek }}
      </p>
    </div>
    <div class="flex-grow space-y-1">
      <p>{{ direction.city }}</p>
      <p class="text-xs text-gray-500 font-medium">
        {{ direction.airportText }}, {{ direction.airport }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  direction: {
    type: Object,
    required: true
  }
});
</script>
