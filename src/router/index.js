import Vue from 'vue'
import VueRouter from 'vue-router'
import Button from '../views/Button.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Button',
    component: Button
  },
  {
    path: '/input',
    name: 'Input',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Input.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
