<template>
  <button class="p-4 rounded-2xl font-black" :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'main'
  }
});

const buttonClasses = computed(() => ({
  'bg-orange-500': props.variant === 'main'
}));
</script>
