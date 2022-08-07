<template>
  <input
    :value="modelValue"
    type="input"
    class="py-3 px-4 border border-gray-200 rounded-lg outline-none font-bold"
    @input="handleInput"
    @change="handleInput"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const handleInput = (event) => emit('update:modelValue', event.target.value);
</script>
