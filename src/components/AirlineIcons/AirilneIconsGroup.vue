<template>
  <div class="flex -space-x-2">
    <span
      v-if="numberOfHiddenAirlines > 1"
      class="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-gray-300 font-medium z-10 bg-white"
    >
      +{{ numberOfHiddenAirlines }}
    </span>
    <AirlineIcon
      v-for="(airline, i) in croppedAirlines"
      :key="i"
      :airline="airline"
      :style="`z-index: ${i}`"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import AirlineIcon from './AirlineIcon.vue';

const props = defineProps({
  airlines: {
    type: Array,
    required: true
  }
});

const NUMBER_OF_VISIBLE_AIRLINES = 2;
const croppedAirlines = props.airlines.slice(0, NUMBER_OF_VISIBLE_AIRLINES);
const numberOfHiddenAirlines = computed(
  () => props.airlines.length - NUMBER_OF_VISIBLE_AIRLINES
);
</script>
