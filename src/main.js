import { createApp, h, resolveComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

import { createBottomSheet } from '@/shared/bottom-sheet-controller';

import router from './router';

import './assets/css/index.css';

library.add(faArrowLeft, faXmark);

const App = {
  name: 'App',
  render: () => h(resolveComponent('router-view'))
};

createApp(App)
  .use(router)
  .provide('bottom-sheet', createBottomSheet())
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app');
