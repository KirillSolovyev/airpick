<template>
  <form class="space-y-4" @submit.prevent="$emit('onStartSearch')">
    <div class="space-y-3">
      <div class="bg-white divide-y rounded-2xl overflow-hidden">
        <CitySelectInput
          :value="getCityName(searchState.dep)"
          placeholder="Откуда"
          name="dep-city-bottom-sheet"
          @onCitySelect="$emit('onDepCitySelect', $event)"
        />
        <CitySelectInput
          :value="getCityName(searchState.arr)"
          placeholder="Куда"
          name="arr-city-bottom-sheet"
          @onCitySelect="$emit('onArrCitySelect', $event)"
        />
      </div>
      <DateInputs
        :dates="searchState.dates"
        @onDatesSelect="$emit('onDatesSelect', $event)"
      />
    </div>
    <AppButton type="submit" variant="main" class="w-full text-white text-2xl">
      Показать рейсы
    </AppButton>
  </form>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue';
import { DICT } from '@/shared/config';
import CitySelectInput from './CitySelectInput.vue';
import DateInputs from './DateInputs.vue';

defineProps({
  searchState: {
    type: Object,
    required: true
  }
});

const getCityName = (cityCode) => {
  const city = DICT.CITIES.find(({ code }) => code === cityCode);
  return city ? `${city.name}, ${city.code}` : '';
};
</script>
