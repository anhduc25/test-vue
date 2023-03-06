import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '../views/HomeApp.vue'
import TestAPI from '../views/TestAPI.vue';
import AllData from '../views/AllData.vue';
import DetailData from '../views/DetailData.vue';
import AddData from '../views/AddData.vue';
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
        name: 'alldata',
        path: '/TestAPI/AllData/page:id_page',
        component: AllData,
      },
      {
        name: 'detaildata',
        path: '/TestAPI/DetailData/',
        component: DetailData,
      },
      {
        name: 'adddata',
        path: '/TestAPI/AddData/',
        component: AddData,
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
