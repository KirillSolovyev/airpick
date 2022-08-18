<template>
  <PageLayout>
    <template #header>
      <AppHeader class="py-2">
        <template #leftAction>
          <AppHeaderBackButton
            class="flex items-center justify-center w-full text-lg"
            @click="proceedToSearchPage"
          />
        </template>
        <h2 class="text-lg font-bold text-center">Бронирование</h2>
      </AppHeader>
    </template>
    <template #default>
      <form @submit.prevent="proceedToPaymentPage">
        <div class="my-4 p-4 space-y-4 bg-white rounded-2xl">
          <div class="space-y-3">
            <h4 class="text-lg font-black">Фамилия — на латинице</h4>
            <AppInput
              v-model="state.lastName"
              v-maska="'S*'"
              class="w-full bg-gray-100 uppercase transition duration-300"
              :class="
                v$.lastName.$error ? 'border-red-500' : 'border-transparent'
              "
              placeholder="SOLOVYOV"
              @blur="v$.lastName.$touch"
            />
          </div>
          <div class="space-y-3">
            <h4 class="text-lg font-black">Имя — на латинице</h4>
            <AppInput
              v-model="state.firstName"
              v-maska="'S*'"
              class="w-full bg-gray-100 uppercase transition duration-300"
              :class="
                v$.firstName.$error ? 'border-red-500' : 'border-transparent'
              "
              placeholder="KIRILL"
              @blur="v$.firstName.$touch"
            />
          </div>
          <div class="space-y-3">
            <h4 class="text-lg font-black">Выберите пол</h4>
            <div class="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg">
              <button
                type="button"
                class="flex items-center justify-center h-10 rounded-lg transition duration-300"
                :class="{ 'bg-white': state.gender === 'F' }"
                @click="state.gender = 'F'"
              >
                Женщина
              </button>
              <button
                type="button"
                class="flex items-center justify-center h-10 rounded-lg transition duration-300"
                :class="{ 'bg-white': state.gender === 'M' }"
                @click="state.gender = 'M'"
              >
                Мужчина
              </button>
            </div>
          </div>
          <div class="space-y-3">
            <h4 class="text-lg font-black">Дата рождения</h4>
            <AppInput
              v-model="state.dateOfBirth"
              v-maska="'##-##-####'"
              class="w-full bg-gray-100 transition duration-300"
              :class="
                v$.dateOfBirth.$error ? 'border-red-500' : 'border-transparent'
              "
              placeholder="ДД-ММ-ГГГГ"
              @blur="v$.dateOfBirth.$touch"
            />
          </div>
          <div class="space-y-3">
            <h4 class="text-lg font-black">№ паспорта или удв. личности</h4>
            <AppInput
              v-model="state.documentNumber"
              v-maska="[`N${'#'.repeat(8)}`, '#'.repeat(9)]"
              class="w-full bg-gray-100 transition duration-300"
              :class="
                v$.documentNumber.$error
                  ? 'border-red-500'
                  : 'border-transparent'
              "
              placeholder="N00000000 или 000000000"
              @blur="v$.documentNumber.$touch"
            />
          </div>
          <div class="space-y-3">
            <h4 class="text-lg font-black">ИИН</h4>
            <AppInput
              v-model="state.iin"
              v-maska="'#'.repeat(12)"
              class="w-full bg-gray-100 border-transparent"
              placeholder="000000000000"
            />
          </div>
        </div>
        <AppButton type="submit" class="sticky bottom-0 w-full text-white">
          Продолжить
        </AppButton>
      </form>
      <Transition name="fade">
        <section
          v-if="isLoading"
          class="fixed inset-0 w-full h-full flex items-center justify-center bg-gray-100"
        >
          <AppLoader />
        </section>
      </Transition>
    </template>
  </PageLayout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

import PageLayout from '@/components/PageLayout.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import AppHeaderBackButton from '@/components/header/AppHeaderBackButton.vue';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import AppLoader from '@/components/AppLoader.vue';

const props = defineProps({
  bookingId: {
    type: String,
    required: true
  }
});

const router = useRouter();

const isLoading = ref(false);
const state = ref({
  firstName: '',
  lastName: '',
  gender: 'F',
  dateOfBirth: '',
  documentNumber: '',
  iin: ''
});

const rules = {
  firstName: { required },
  lastName: { required },
  gender: { required },
  dateOfBirth: { required },
  documentNumber: { required }
};

const v$ = useVuelidate(rules, state);

const proceedToSearchPage = () => router.back();

const proceedToPaymentPage = async () => {
  const result = await v$.value.$validate();
  if (result) {
    isLoading.value = true;
    localStorage.setItem('airpick:bookingData', JSON.stringify(state.value));
    setTimeout(() => {
      router.push({
        name: 'Payment',
        params: { paymentId: props.bookingId }
      });
    }, 2000);
  }
};
</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({ name: 'BookingPage' });
</script>
