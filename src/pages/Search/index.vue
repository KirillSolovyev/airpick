<template>
  <PageLayout>
    <template #header>
      <AppHeader class="py-2 bg-blue-500">
        <template #leftAction>
          <AppHeaderBackButton
            class="flex items-center justify-center w-full text-white text-lg"
          />
        </template>
        <h2 class="text-white text-lg font-bold text-center text-ellipsis">
          Алматы – Нур-Султан
        </h2>
        <p class="text-white text-center text-sm">24 авг - 30 авг</p>
      </AppHeader>
    </template>
    <template #default>
      <section class="mt-5 space-y-3">
        <SearchResult v-for="i in 10" :key="i" />
      </section>
    </template>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/PageLayout.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import AppHeaderBackButton from '@/components/header/AppHeaderBackButton.vue';
import SearchResult from './components/SearchResult.vue';
</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchPage'
});
</script>
