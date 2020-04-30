// Packages
import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Views
import Home from '../views/Home.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/life-map',
    name: 'LifeMap',
    component: () => import(/* webpackChunkName: "about" */ '../views/LifeMap.vue')
  },
  {
    path: '/github-info',
    name: 'GitHubInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/GitHubInfo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
