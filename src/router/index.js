import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/Main/index.vue';
import SearchPage from '@/pages/Search/index.vue';
import BookingPage from '@/pages/Booking/index.vue';
import PaymentPage from '@/pages/Payment/index.vue';
import PaymentResultPage from '@/pages/PaymentResult/index.vue';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage
    },
    {
      path: '/search/:hashcode',
      name: 'Search',
      component: SearchPage
    },
    {
      path: '/booking/:bookingId',
      name: 'Booking',
      component: BookingPage
    },
    {
      path: '/payment/:paymentId',
      name: 'Payment',
      component: PaymentPage
    },
    {
      path: '/payment/success',
      name: 'PaymentResult',
      component: PaymentResultPage
    }
  ]
});

export default router;
