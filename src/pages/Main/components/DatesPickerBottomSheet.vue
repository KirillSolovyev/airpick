<template>
  <AppBottomSheet :name="name">
    <template #default="{ hide }">
      <div class="px-4 pb-6">
        <DatePicker
          locale="ru"
          :modelValue="datesValues"
          class="w-full border-none"
          :is-range="isRange"
          @update:modelValue="handleDatesSelect"
        />
        <AppButton
          type="button"
          class="sticky bottom-6 w-full text-white z-10"
          @click="
            () => {
              commitDatesSelect();
              hide();
            }
          "
        >
          Продолжить
        </AppButton>
      </div>
    </template>
  </AppBottomSheet>
</template>

<script setup>
import { ref, computed } from 'vue';
import { DatePicker } from 'v-calendar';
import AppBottomSheet from '@/components/AppBottomSheet/AppBottomSheet.vue';
import AppButton from '@/components/AppButton.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  dates: {
    type: Array,
    required: true
  },
  isRange: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['onDatesSelect']);

const selectedDates = ref(props.dates);
const datesValues = computed(() => {
  const [start, end] = props.dates;
  return !props.isRange ? start : { start, end: end || start };
});

const handleDatesSelect = (dates) => {
  if (props.isRange) {
    selectedDates.value = [dates.start, dates.end];
  } else {
    selectedDates.value = [dates];
  }
};

const commitDatesSelect = () => emit('onDatesSelect', selectedDates.value);
</script>

<style>
.vc-title,
.vc-weeks {
  @apply capitalize;
}
</style>
