<template>
  <PageLayout>
    <template #header>
      <AppHeader class="py-2">
        <template #leftAction>
          <AppHeaderBackButton
            class="flex items-center justify-center w-full text-lg"
            @click="proceedToMainPage"
          />
        </template>
        <h2 class="text-lg font-bold text-center text-ellipsis">
          Алматы – Нур-Султан
        </h2>
        <p class="text-center text-sm">24 авг - 30 авг</p>
      </AppHeader>
    </template>
    <template #default>
      <section class="mt-5 space-y-3">
        <SearchResult v-for="i in 10" :key="i" @click="showResultDetails" />
      </section>
      <DetailsBottomSheet @onProceedToBooking="proceedToBooking" />
    </template>
  </PageLayout>
</template>

<script setup>
import { inject, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

import { useAirSearch } from './composable/use-search';
import PageLayout from '@/components/PageLayout.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import AppHeaderBackButton from '@/components/header/AppHeaderBackButton.vue';
import SearchResult from './components/SearchResult.vue';
import DetailsBottomSheet from './components/details/DetailsBottomSheet.vue';

const props = defineProps({
  hashcode: {
    type: String,
    required: true
  }
});

const bottomSheet = inject('bottom-sheet');

const router = useRouter();
const search = useAirSearch();

const showResultDetails = () => bottomSheet.show('details-bottom-sheet');
const proceedToMainPage = () => router.replace({ name: 'Main' });
const proceedToBooking = () =>
  router.push({ name: 'Booking', params: { bookingId: '123' } });

onBeforeMount(() => {
  search.startAirSearch(props.hashcode);
});
</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchPage'
});
</script>
