import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DcHeroes from '../views/DcHeroes'
import Calendar from '../views/Calendar'
import Markdown from '../views/Markdown'
import Slider from '../views/Slider'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/heroes',
    name: 'DCHeroes',
    component: DcHeroes
  },
  {
    path: '/calendar',
    name: 'Calendar', 
    component: Calendar
  },
  {
    path: '/markdown',
    name: 'Markdown', 
    component: Markdown
  },
  {
    path: '/slider',
    name: 'Slider', 
    component: Slider
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
