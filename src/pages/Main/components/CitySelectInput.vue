<template>
  <SearchFormButton class="w-full" @click="showCitiesInput">
    <span :class="value ? 'text-black' : 'text-gray-400'">
      {{ value || placeholder }}
    </span>
  </SearchFormButton>
  <CitySelectModal :name="name" @onCitySelect="onSelectCity" />
</template>

<script setup>
import { inject } from 'vue';
import SearchFormButton from './SearchFormButton.vue';
import CitySelectModal from './CitySelectModal.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['onCitySelect']);

const bottomSheet = inject('bottom-sheet');

const showCitiesInput = () => bottomSheet.show(props.name);
const onSelectCity = (event) => {
  emit('onCitySelect', event);
  bottomSheet.hide(props.name);
};
</script>
