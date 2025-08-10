import { createRouter, createWebHistory } from 'vue-router'

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import NotFoundView from '@/views/NotFoundView.vue'
import DavidAlausaView from '@/views/DavidAlausaView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
    {
      path: '/',
      name: 'DavidAlausa',
      component: DavidAlausaView,
    },

  ],
})

export default router
