import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/Main/index.vue';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage
    }
  ]
});

export default router;
