import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import './components/components';
import { Router } from './lib/router/router.polyfill';

Vue.use(VueRouter)

const router = Router.createRouter('history');
const app = new Vue({
    router
}).$mount('#app')