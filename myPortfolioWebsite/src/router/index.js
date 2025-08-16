import { createRouter, createWebHistory } from 'vue-router'

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import NotFoundView from '@/views/NotFoundView.vue'
import DavidAlausaView from '@/views/DavidAlausaView.vue';
import AboutView from '@/views/AboutView.vue';
import SkillsView from '@/views/SkillsView.vue';
import ContactView from '@/views/ContactView.vue';

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
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router
