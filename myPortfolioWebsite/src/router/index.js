import { createRouter, createWebHistory } from 'vue-router'

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
