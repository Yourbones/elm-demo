import {
  getUser, // 获取用户信息
  getAddressList // 获取收货地址列表
} from '../service/getData'
import {
  GET_USERINFO, // 将用户信息存入 Vuex
  REMOVE_ADDRESS // 含义待定
} from './mutation-type'

export  default {

  async getUserInfo({
    commit
  }) {
    let res = await getUser();
    commit(GET_USERINFO, res);
  },
  async saveAddress({
    commit,
    state}) {
    if (state.removeAddress.length > 0) return;

    let address = await getAddressList(state.userInfo.user_id) ;
    commit(REMOVE_ADDRESS, address);
  }
}
