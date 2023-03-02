import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '../views/HomeApp.vue'
import TestAPI from '../views/TestAPI.vue';
import ShowData from '../views/ShowData.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeApp
  }, {
    path: '/TestAPI',
    name: 'testAPI',
    component: TestAPI,
    children: [
      {
        name: 'showdata',
        path: '/TestAPI/ShowData/:id',
        component: ShowData,
        props: (route) => ({ id: parseInt(route.params.id) })
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
