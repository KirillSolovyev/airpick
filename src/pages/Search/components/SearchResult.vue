<template>
  <div class="p-4 space-y-4 bg-white rounded-2xl">
    <FlightDetals
      v-for="(flight, i) in offer.flights"
      :key="i"
      :flight="flight"
    />
    <AppButton class="py-2 text-white">{{ offerPrice }} ₸</AppButton>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { textUtils } from '@/shared/utils/text';
import AppButton from '@/components/AppButton.vue';
import FlightDetals from './FlightDetails.vue';

const props = defineProps({
  offer: {
    type: Object,
    required: true
  }
});

const offerPrice = computed(() =>
  textUtils.prettyPrice(props.offer.price.amount)
);
</script>
