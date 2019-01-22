import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', // 一级路由，对应 APP.vue
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
