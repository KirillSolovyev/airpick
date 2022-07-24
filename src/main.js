import { createApp, h, resolveComponent } from 'vue';
import router from './router';

import './assets/css/index.css';

const App = {
  name: 'App',
  render: () => h(resolveComponent('router-view'))
};

createApp(App).use(router).mount('#app');
