import { createApp, h, resolveComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { SetupCalendar } from 'v-calendar';

import { createBottomSheet } from '@/shared/bottom-sheet-controller';

import router from './router';

import 'v-calendar/dist/style.css';
import './assets/css/index.css';

library.add(faArrowLeft, faXmark);

const App = {
  name: 'App',
  render: () => h(resolveComponent('router-view'))
};

const VCalendarConfig = {
  locales: {
    ru: {
      firstDayOfWeek: 2,
      masks: {
        title: 'MMMM YYYY',
        weekdays: 'WW'
      }
    }
  }
};

createApp(App)
  .use(router)
  .use(SetupCalendar, VCalendarConfig)
  .provide('bottom-sheet', createBottomSheet())
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app');
