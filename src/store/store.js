import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: null,
    isSignin: null,
    headTitle: null,
    isBack: null
  }
})

export default store
