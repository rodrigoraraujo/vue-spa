import Vue from 'vue';
import store from './vuex/index';
import AppLayout from './theme/Layout.vue';
import router from './router';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

const app = new Vue({ router, ...AppLayout, store });

Vue.use(Loading);

export { app, router, store };
