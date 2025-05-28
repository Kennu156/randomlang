import { createRouter, createWebHistory } from 'vue-router';
import wolvesart from './components/views/wolvesart.vue';

const routes = [
    { path: '/',name: 'Wolvesart', component: wolvesart },


];


const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;