<template>
  <div class="flex items-center justify-between space-x-2">
    <div class="flex-shrink-0 w-[105px]">
      <p class="font-medium">{{ flightTime }}</p>
      <p class="text-gray-500 text-xs font-medium">
        {{ firstSegment.dep.airport }} — {{ lastSegment.arr.airport }}
      </p>
    </div>
    <div class="flex flex-col items-center justify-center flex-grow">
      <p class="font-medium">{{ transfersText }}</p>
      <p class="text-gray-500 text-xs font-medium">{{ flight.durationText }}</p>
    </div>
    <AirlineIconsGroup
      :airlines="uniqueAirlines"
      class="justify-end flex-shrink-0 w-[75px]"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { textUtils } from '@/shared/utils/text';
import { getUniqueAirlines } from '@/shared/utils/flights';
import AirlineIconsGroup from '@/components/AirlineIcons/AirilneIconsGroup.vue';

const props = defineProps({
  flight: {
    type: Object,
    required: true
  }
});

const firstSegment = computed(() => props.flight.segments[0]);
const lastSegment = computed(() => props.flight.segments.slice(-1)[0]);
const flightTime = computed(
  () => `${firstSegment.value.dep.time} — ${lastSegment.value.arr.time}`
);
const numberOfTransfers = computed(() => props.flight.segments.length - 1);
const transfersText = computed(() =>
  numberOfTransfers.value > 0
    ? `${numberOfTransfers.value} ${textUtils.pluralize(
        numberOfTransfers.value,
        ['пересадка', 'пересадки', 'пересадок']
      )}`
    : 'прямой'
);
const uniqueAirlines = computed(() => getUniqueAirlines(props.flight));
</script>
