import { createRouter, createWebHistory } from 'vue-router'
import Kalkulator from '../views/Kalkulator.vue'
import Login from '../views/LoginView.vue'

const routes = [
    {
        path:'/',
        name:'Login',
        component: Login
    },
    {
        path:'/Kalkulator',
        name:'Kalkulator',
        component: Kalkulator
    },
    {
        path:'/kontaktskjema',
        name:'Kontakt',
        component: () => import('../views/Kontaktinfo.vue')
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router