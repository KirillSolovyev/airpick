<template>
  <AppHeader class="py-2">
    <template #leftAction>
      <AppHeaderBackButton
        class="flex items-center justify-center w-full text-lg"
        @click="$emit('onBackButtonClick')"
      />
    </template>
    <h2 class="text-lg font-bold text-center text-ellipsis">
      {{ directionText }}
    </h2>
    <p class="text-center text-sm">{{ datesText }}</p>
  </AppHeader>
</template>

<script setup>
import { computed } from 'vue';

import AppHeader from '@/components/header/AppHeader.vue';
import AppHeaderBackButton from '@/components/header/AppHeaderBackButton.vue';
import { dictUtils } from '@/shared/utils/dict';
import { dateUtils } from '@/shared/utils/dates';

const props = defineProps({
  searchParameters: {
    type: Object,
    required: true
  },
  dict: {
    type: Object,
    required: true
  }
});

const firstFlight = computed(() => {
  return props.searchParameters.flights[0];
});
const directionText = computed(() => {
  const depCity = dictUtils.getCity(firstFlight.value.orig[0], props.dict);
  const arrCity = dictUtils.getCity(firstFlight.value.dest[0], props.dict);
  return `${depCity.name} – ${arrCity.name}`;
});

const datesText = computed(() => {
  const depDate = dateUtils.getVerbalDate(firstFlight.value.dep_at);
  if (props.searchParameters.OW) {
    return depDate;
  }

  const arrDate = dateUtils.getVerbalDate(
    props.searchParameters.flights[1].dep_at
  );
  return `${depDate} – ${arrDate}`;
});
</script>
