import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PortfolioView from '@/views/PortfolioView.vue'

const routes = [
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
