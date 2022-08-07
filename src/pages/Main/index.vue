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
        @onDatesSelect="onDatesSelect"
      />
    </div>
  </PageLayout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { airflow } from '@aviatakz/platform-client';

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

const onDatesSelect = (dates) => (searchForm.value.dates = dates);

const validate = () =>
  !searchForm.value.dep ||
  !searchForm.value.arr ||
  !searchForm.value.dates.length;

const startSearch = () => {
  const getItinerary = (dep, arr, date) => ({ dep, arr, date });

  if (!validate()) {
    const { dep, arr, dates } = searchForm.value;
    const itinerary = getItinerary(dep, arr, dates[0]);
    const itineraries =
      dates.length == 1
        ? [itinerary]
        : [itinerary, getItinerary(arr, dep, dates[1])];

    const hashcode = airflow.utils.buildQuery({
      itineraries,
      cabinClass: 'E',
      passengers: {
        adt: 1,
        chd: 0,
        inf: 0,
        yth: 0
      }
    });
    router.push({ name: 'Search', params: { hashcode } });
  }
};
</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainPage'
});
</script>
