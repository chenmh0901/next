import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/index.vue';
import Welcome from '@/views/welcome/index.vue';
import Detail from '@/views/detail.vue';
import Test from '@/views/test.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    // @TODO danger
    path: '/test',
    name: 'Test',
    component: Test
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
