<template>
  <PageLayout>
    <template #header>
      <AppHeader class="py-2 bg-blue-500">
        <template #leftAction>
          <AppHeaderBackButton
            class="flex items-center justify-center w-full text-white text-lg"
          />
        </template>
        <h2 class="text-white text-lg font-bold text-center">Оплата билета</h2>
      </AppHeader>
    </template>
    <template #default>
      <form class="flex-grow py-4 space-y-4">
        <div class="p-4 space-y-4 bg-white rounded-3xl">
          <h4 class="text-2xl font-black">Нур-Султан → Алматы</h4>
          <div class="flex items-center">
            <AirlineIcon />
            <p class="ml-1 font-medium">Fly Arystan</p>
            <p class="ml-auto text-sm font-medium">22:15 - 04:30</p>
          </div>
        </div>
        <div class="p-4 space-y-4 bg-white rounded-3xl">
          <h4 class="font-black">Пассажир</h4>
          <div class="flex justify-between">
            <div>
              <p class="text-xs text-gray-500">Фамилия Имя</p>
              <p>SOLOVYOV KIRILL</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">Номер документа</p>
              <p>991211351128</p>
            </div>
          </div>
        </div>
        <div class="p-4 space-y-4 bg-white rounded-3xl">
          <h4 class="font-black">Итого</h4>
          <div class="flex justify-between">
            <p>Стоитмость билета</p>
            <p class="font-black">28 500 ₸</p>
          </div>
          <div class="flex justify-between">
            <p>Сервисный сбор</p>
            <p class="font-black">8 500 ₸</p>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <AppButton
        class="sticky bottom-0 w-full text-white"
        @click="proceedToPaymentResult"
      >
        Оплатить 302 889 ₸
      </AppButton>
    </template>
  </PageLayout>
</template>

<script setup>
import { useRouter } from 'vue-router';

import PageLayout from '@/components/PageLayout.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import AppHeaderBackButton from '@/components/header/AppHeaderBackButton.vue';
import AirlineIcon from '@/components/AirlineIcons/AirlineIcon.vue';
import AppButton from '@/components/AppButton.vue';

const router = useRouter();

const proceedToPaymentResult = () => router.push({ name: 'PaymentResult' });
</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({ name: 'PaymentPage' });
</script>
