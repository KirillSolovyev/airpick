import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/Main/index.vue';
import SearchPage from '@/pages/Search/index.vue';
import BookingPage from '@/pages/Booking/index.vue';

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
    }
  ]
});

export default router;
