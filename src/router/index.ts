import { createRouter, createWebHashHistory } from 'vue-router';
import localCache from '@/utils/cache';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/index.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

router.beforeEach((to) => {
  if (to.path !== '/login' && !localCache.getCache('token')) {
    return '/login';
  }
});

export default router;
