<template>
  <PageLayout class="bg-blue-500">
    <template #header>
      <AppHeader>
        <h1 class="text-white text-2xl font-bold text-center">Авиабилеты</h1>
      </AppHeader>
    </template>
    <div class="mt-64">
      <SearchForm />
    </div>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/PageLayout.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import SearchForm from './components/SearchForm.vue';
</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainPage'
});
</script>
