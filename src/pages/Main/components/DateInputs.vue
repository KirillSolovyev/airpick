<template>
  <div class="flex bg-white divide-x rounded-2xl overflow-hidden">
    <SearchFormButton
      class="w-1/2"
      :class="departureDateText ? 'text-black' : 'text-gray-400'"
      @click="handleDateInputClick(false)"
    >
      {{ departureDateText ? departureDateText : 'Дата туда' }}
    </SearchFormButton>
    <SearchFormButton
      class="w-1/2"
      :class="arrivalDateText ? 'text-black' : 'text-gray-400'"
      @click="handleDateInputClick(true)"
    >
      {{ arrivalDateText ? arrivalDateText : 'Дата обратно' }}
    </SearchFormButton>
    <DatesPickerBottomSheet
      name="date-picker-bottom-sheet"
      :dates="dates"
      :is-range="isRange"
      @onDatesSelect="onDatesSelect"
    />
  </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue';
import { dateUtils } from '@/shared/utils/dates';

import SearchFormButton from './SearchFormButton.vue';
import DatesPickerBottomSheet from './DatesPickerBottomSheet.vue';

const props = defineProps({
  dates: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['onDatesSelect']);

const bottomSheet = inject('bottom-sheet');
const isRange = ref(false);

const departureDateText = computed(() =>
  props.dates[0] ? dateUtils.getVerbalDate(props.dates[0]) : null
);
const arrivalDateText = computed(() =>
  props.dates[1] ? dateUtils.getVerbalDate(props.dates[1]) : null
);

const showDatesPicker = () => bottomSheet.show('date-picker-bottom-sheet');
const handleDateInputClick = (range) => {
  const shouldBeRange = props.dates.length > 1;
  isRange.value = shouldBeRange || range;
  showDatesPicker();
};
const onDatesSelect = (dates) => {
  emit(
    'onDatesSelect',
    dates.map((date) => dateUtils.format(date, 'YYYY-MM-DD'))
  );
};
</script>
