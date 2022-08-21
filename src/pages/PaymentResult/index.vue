<template>
  <PageLayout class="!bg-white">
    <template #header>
      <AppHeader class="!bg-white">
        <h2 class="text-lg font-bold text-center">Билет оплачен</h2>
      </AppHeader>
    </template>
    <template #default>
      <div class="flex-grow flex flex-col items-center justify-center">
        <video
          width="404"
          height="466"
          preload="metadata"
          autoplay
          muted
          playsinline
        >
          <source src="@/assets/img/successful-payment.mp4" type="video/mp4" />
        </video>
        <h4 class="text-2xl font-black">Билет оплачен</h4>
      </div>
    </template>
    <template #footer>
      <AppButton class="w-full mb-4 text-white" @click="proceedToMainPage">
        Найти новые рейсы
      </AppButton>
    </template>
  </PageLayout>
</template>

<script setup>
import { useRouter } from 'vue-router';

import PageLayout from '@/components/PageLayout.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import AppButton from '@/components/AppButton.vue';

const router = useRouter();
const proceedToMainPage = () => router.push({ name: 'Main' });
</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({ name: 'PaymentResultPage' });
</script>
