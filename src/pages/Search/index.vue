<template>
  <Transition name="fade">
    <PageLayout v-if="!search.isLoading.value">
      <template #header>
        <SearchHeader
          :search-parameters="search.result.value.$meta.search_params"
          :dict="search.result.value.$meta.dict"
          @onBackButtonClick="proceedToMainPage"
        />
      </template>
      <template #default>
        <section class="mt-5 pb-4 space-y-3">
          <SearchResult
            v-for="offer in search.mappedOffers.value"
            :key="offer.id"
            :offer="offer"
            @click="showResultDetails(offer)"
          />
        </section>
        <DetailsBottomSheet
          v-if="selectedOffer"
          :offer="selectedOffer"
          @onProceedToBooking="proceedToBooking"
        />
      </template>
    </PageLayout>
    <section
      v-else
      class="flex flex-col items-center justify-center w-full h-full space-y-6 bg-gray-100"
    >
      <h4 class="text-lg font-black">Идет поиск авиабилетов</h4>
      <AppLoader />
    </section>
  </Transition>
</template>

<script setup>
import { ref, inject, onBeforeMount, nextTick } from 'vue';
import { useRouter } from 'vue-router';

import { useAirSearch } from './composable/use-search';
import PageLayout from '@/components/PageLayout.vue';
import AppLoader from '@/components/AppLoader.vue';
import SearchHeader from './components/SearchHeader.vue';
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

const selectedOffer = ref();

const showResultDetails = (offer) => {
  selectedOffer.value = offer;
  nextTick(() => bottomSheet.show('details-bottom-sheet'));
};
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
