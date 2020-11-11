import Vue from 'vue';
import router from './router';
import App from './App.vue';
import VueMeta from 'vue-meta';

// Globla components
import './components';
Vue.config.productionTip = false;

// Icons by material desing
import '@mdi/font/css/materialdesignicons.min.css';

// Plugins
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')