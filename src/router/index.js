import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import ConditionsView from '@/views/ConditionsView.vue'
import PaymentView from '@/views/PaymentView.vue'
import ContactsView from '@/views/ContactsView.vue'

const routes = [
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
  },
  { path: '/payment', name: 'payment', component: PaymentView },
  {
    path: '/conditions',
    name: 'conditions',
    component: ConditionsView,
  },
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
