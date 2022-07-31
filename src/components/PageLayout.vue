<template>
  <main class="flex flex-col w-full min-h-screen bg-gray-100">
    <section class="sticky top-0 flex-shrink-0 z-30">
      <slot name="header" />
    </section>
    <section class="flex flex-col flex-grow px-4">
      <slot />
      <div class="sticky bottom-1">
        <slot name="footer" />
      </div>
    </section>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageLayout'
});
</script>
