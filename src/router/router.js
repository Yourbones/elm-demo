import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/utils/env-config' // 从配置文件中引入路由模式
import Home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  mode: routerMode,
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
