// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import './utils/rem'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App) // render 是渲染函数，渲染一个视图，然后提供给 el 挂载。vue 1.0 的写法是 component:'APP',template:<APP/>
})