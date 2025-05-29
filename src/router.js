import { createRouter, createWebHistory } from 'vue-router';
import wolvesart from './components/views/wolvesart.vue';
import optinet from './components/views/optinet.vue';

const routes = [
    { path: '/',name: 'Wolvesart', component: wolvesart },
    { path: '/optinet', name: 'Optinet', component: optinet },

];


const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;