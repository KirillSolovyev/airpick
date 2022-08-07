<template>
  <img
    :src="`https://aviata.kz/static/airline-logos/80x80/${airline.iata}.png`"
    class="rounded-full border border-gray-300"
    width="30"
    height="30"
    :alt="airline.title"
  />
</template>

<script setup>
defineProps({
  airline: {
    type: Object,
    required: true
  }
});
</script>
