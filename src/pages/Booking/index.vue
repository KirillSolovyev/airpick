<template>
  <PageLayout>
    <template #header>
      <AppHeader class="py-2 bg-blue-500">
        <template #leftAction>
          <AppHeaderBackButton
            class="flex items-center justify-center w-full text-white text-lg"
          />
        </template>
        <h2 class="text-white text-lg font-bold text-center">Бронирование</h2>
      </AppHeader>
    </template>
    <template #default>
      <div class="my-4 p-4 space-y-4 bg-white rounded-2xl">
        <div class="space-y-3">
          <h4 class="text-lg font-black">Фамилия — на латинице</h4>
          <AppInput
            class="w-full bg-gray-100 border-0"
            placeholder="SOLOVYOV"
          />
        </div>
        <div class="space-y-3">
          <h4 class="text-lg font-black">Имя — на латинице</h4>
          <AppInput class="w-full bg-gray-100 border-0" placeholder="KIRILL" />
        </div>
        <div class="space-y-3">
          <h4 class="text-lg font-black">Выберите пол</h4>
          <div class="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg">
            <button class="flex items-center justify-center h-10 rounded-lg">
              Женщина
            </button>
            <button
              class="flex items-center justify-center h-10 bg-white rounded-lg"
            >
              Мужчина
            </button>
          </div>
        </div>
        <div class="space-y-3">
          <h4 class="text-lg font-black">Дата рождения</h4>
          <AppInput
            class="w-full bg-gray-100 border-0"
            placeholder="ДД-ММ-ГГГГ"
          />
        </div>
        <div class="space-y-3">
          <h4 class="text-lg font-black">№ паспорта или удв. личности</h4>
          <AppInput
            class="w-full bg-gray-100 border-0"
            placeholder="N00000000 или 000000000"
          />
        </div>
        <div class="space-y-3">
          <h4 class="text-lg font-black">ИИН</h4>
          <AppInput
            class="w-full bg-gray-100 border-0"
            placeholder="000000000000"
          />
        </div>
      </div>
      <AppButton class="sticky bottom-0 w-full text-white">
        Продолжить
      </AppButton>
    </template>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/PageLayout.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import AppHeaderBackButton from '@/components/header/AppHeaderBackButton.vue';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({ name: 'BookingPage' });
</script>
