import { createApp, h, resolveComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import router from './router';

import './assets/css/index.css';

library.add(faArrowLeft);

const App = {
  name: 'App',
  render: () => h(resolveComponent('router-view'))
};

createApp(App).use(router).component('fa-icon', FontAwesomeIcon).mount('#app');
