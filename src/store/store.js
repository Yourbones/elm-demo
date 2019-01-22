import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: null, // 用户信息
    isSignin: null, // 是否登录注册
    headTitle: null, // 页面头部组件标题
    isBack: null, // 页面是否需要显示返回图标
    geohash: null, // 用户所在位置经纬度hash字符串
  }
})

export default store
