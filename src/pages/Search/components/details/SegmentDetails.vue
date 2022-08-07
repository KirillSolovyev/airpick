<template>
  <div class="flex leading-none">
    <div
      class="flex flex-col items-center flex-shrink-0 w-[34px] pb-[5px] pr-[3px]"
    >
      <span class="w-2 h-2 rounded-full bg-gray-200"></span>
      <span class="h-full w-[2px] bg-gray-200"></span>
      <span class="w-2 h-2 rounded-full bg-gray-200"></span>
    </div>
    <div class="flex-grow space-y-4">
      <SegmentDirection :direction="segment.dep" />
      <SegmentDirection :direction="segment.arr" />
    </div>
  </div>
</template>

<script setup>
import SegmentDirection from './SegmentDirection.vue';

defineProps({
  segment: {
    type: Object,
    required: true
  }
});
</script>
