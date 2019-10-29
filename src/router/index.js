import Vue from 'vue'
import VueRouter from 'vue-router'
import Frame from '@/components/Frame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Frame',
    component: Frame,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
