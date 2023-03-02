import { createRouter, createWebHashHistory } from 'vue-router'
import HomeApp from '../views/HomeApp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeApp
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
