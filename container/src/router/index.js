import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/frontpage',
    name: 'frontpage',
    // route level code-splitting
    // this generates a separate chunk (frontpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "frontpage" */ '../views/FrontPageView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
