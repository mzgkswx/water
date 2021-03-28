import Vue from 'vue'
import VueRouter from 'vue-router'
import Area1 from '../views/Area1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Area1',
    component: Area1
  },
  {
    path: '/area2',
    name: 'Area2',
    component: () => import('../views/Area2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
