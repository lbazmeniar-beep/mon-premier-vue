import { createRouter, createWebHistory } from 'vue-router'

import Compteur from '../views/Compteur.vue'
import Moyenne from '../views/Moyenne.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/compteur'
    },
    {
      path: '/compteur',
      name: 'compteur',
      component: Compteur
    },
    {
      path: '/moyenne',
      name: 'moyenne',
      component: Moyenne
    }
  ]
})

export default router