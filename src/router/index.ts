import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/index.vue';
import Signin from '@/views/signin/index.vue';
import Detail from '@/views/detail.vue';
import Test from '@/views/test.vue';
import Profile from '@/views/profile/profile.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
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
    path: '/profile',
    name: 'Profile',
    component: Profile
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
