<template>
  <div class="space-y-4">
    <h4 class="text-2xl font-black">{{ flightText }}</h4>
    <FlightDetals :flight="flight" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import FlightDetals from '@/shared/components/FlightDetails.vue';

const props = defineProps({
  flight: {
    type: Object,
    required: true
  }
});

const firstSegment = computed(() => props.flight.segments[0]);
const lastSegment = computed(() => props.flight.segments.slice(-1)[0]);
const flightText = computed(() => {
  const { dep } = firstSegment.value;
  const { arr } = lastSegment.value;
  return `${dep.city} → ${arr.city}`;
});
</script>
