<template>
  <PageLayout>
    <template #header>
      <AppHeader class="py-2">
        <template #leftAction>
          <AppHeaderBackButton
            class="flex items-center justify-center w-full text-lg"
            @click="proceedToBookingPage"
          />
        </template>
        <h2 class="text-lg font-bold text-center">Оплата билета</h2>
      </AppHeader>
    </template>
    <template #default>
      <form class="flex-grow py-4 space-y-4">
        <div class="p-4 space-y-4 bg-white rounded-3xl" @click="openDetails">
          <FlightDetails
            v-for="flight in offer.flights"
            :key="flight.$flight_id"
            :flight="flight"
          />
          <AppButton
            type="button"
            class="p-2 bg-gray-300 text-xs text-gray-600 font-medium"
          >
            Подробнее
          </AppButton>
        </div>
        <div class="p-4 space-y-4 bg-white rounded-3xl">
          <h4 class="font-black">Пассажир</h4>
          <div class="flex justify-between">
            <div>
              <p class="text-xs text-gray-500">Фамилия Имя</p>
              <p>{{ passengerName }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">Номер документа</p>
              <p>{{ userData.documentNumber }}</p>
            </div>
          </div>
        </div>
        <div class="p-4 space-y-4 bg-white rounded-3xl">
          <h4 class="font-black">Итого</h4>
          <div class="flex justify-between">
            <p>Стоимость билета</p>
            <p class="font-black">{{ offerPrice }} ₸</p>
          </div>
        </div>
      </form>
      <DetailsBottomSheet :offer="offer">
        <template #footer>
          <AppButton
            class="sticky bottom-0 w-full text-white"
            @click="proceedToPaymentResult"
          >
            Оплатить {{ offerPrice }} ₸
          </AppButton>
        </template>
      </DetailsBottomSheet>
    </template>
    <template #footer>
      <AppButton class="w-full mb-4 text-white" @click="proceedToPaymentResult">
        Оплатить {{ offerPrice }} ₸
      </AppButton>
    </template>
  </PageLayout>
</template>

<script setup>
import { inject, computed } from 'vue';
import { useRouter } from 'vue-router';

import { textUtils } from '@/shared/utils/text';
import PageLayout from '@/components/PageLayout.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import AppHeaderBackButton from '@/components/header/AppHeaderBackButton.vue';
import AppButton from '@/components/AppButton.vue';
import DetailsBottomSheet from '@/shared/components/details/DetailsBottomSheet.vue';
import FlightDetails from './components/FlightDetails.vue';

const router = useRouter();

const bottomSheet = inject('bottom-sheet');

const proceedToBookingPage = () =>
  router.replace({ name: 'Booking', params: { bookingId: offer.id } });

const offer = JSON.parse(localStorage.getItem('airpick:selectedOffer'));
const userData = JSON.parse(localStorage.getItem('airpick:bookingData'));
const openDetails = () => bottomSheet.show('details-bottom-sheet');
const offerPrice = computed(() => textUtils.prettyPrice(offer.price.amount));
const passengerName = computed(() =>
  `${userData.lastName} ${userData.firstName}`.toUpperCase()
);
const proceedToPaymentResult = () => router.push({ name: 'PaymentResult' });
</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({ name: 'PaymentPage' });
</script>
