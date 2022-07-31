<template>
  <PageLayout class="bg-blue-500">
    <template #header>
      <AppHeader class="bg-blue-500">
        <h1 class="text-white text-2xl font-bold text-center">Авиабилеты</h1>
      </AppHeader>
    </template>
    <div class="mt-64">
      <SearchForm
        :search-state="searchForm"
        @onStartSearch="startSearch"
        @onDepCitySelect="onCitySelect($event, 'dep')"
        @onArrCitySelect="onCitySelect($event, 'arr')"
      />
    </div>
  </PageLayout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import PageLayout from '@/components/PageLayout.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import SearchForm from './components/SearchForm.vue';

const router = useRouter();

const searchForm = ref({
  dep: null,
  arr: null,
  dates: []
});

const onCitySelect = (city, type) => {
  if (type === 'dep') {
    searchForm.value.dep = city;
  } else {
    searchForm.value.arr = city;
  }
};

const validate = () =>
  !searchForm.value.dep ||
  !searchForm.value.arr ||
  !searchForm.value.dates.length;

const startSearch = () => {
  if (validate()) {
    router.push({ name: 'Search', params: { hashcode: '123' } });
  }
};
</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainPage'
});
</script>
