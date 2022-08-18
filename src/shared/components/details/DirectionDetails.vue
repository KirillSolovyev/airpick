<template>
  <div class="pt-4 px-4 p-6 space-y-4 rounded-2xl">
    <header class="space-y-1">
      <h3 class="text-2xl font-black">{{ flightText }}</h3>
      <p class="text-sm text-gray-500 font-medium">{{ flight.durationText }}</p>
    </header>
    <div class="space-y-3">
      <div v-for="(segment, i) in flight.segments" :key="i">
        <div class="space-y-3">
          <p v-if="i > 0" class="p-2 bg-gray-100 rounded-xl font-medium">
            Пересадка в г. {{ segment.dep.city }}
          </p>
          <div class="flex items-center space-x-2">
            <AirlineIcon
              :airline="{ iata: segment.airline, title: segment.airlineTitle }"
            />
            <h5>{{ segment.airlineTitle }}</h5>
          </div>
          <SegmentDetails :segment="segment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AirlineIcon from '@/components/AirlineIcons/AirlineIcon.vue';
import SegmentDetails from './SegmentDetails.vue';

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
