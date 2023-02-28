import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/inches',
      name: 'inches',
      component: () => import('@/views/inches/InchesView.vue')
    },
    {
      path: '/rule',
      name: 'rule',
      component: () => import('@/views/rule/RuleView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import('@/views/NotFoundView.vue')
    }

  ]
})