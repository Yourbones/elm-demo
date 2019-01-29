import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const index = new Vuex.Store({
  state: {
    latitude: '', // 当前位置的纬度
    longitude: '', // 当前位置的经度
    geohash: '30.28649,120.00539', // 地址 geohash 值
    userInfo: null, // 用户信息
    isLogin: null, // 是否登录
    avatarUrl: null, // 头像地址

    choosedAddress: null, // 选择的地址
    addressIndex: null, // 选择地址的索引值
    searchAddress: null, // 搜索并选择的地址
    removeAddress: [], // 移除地址
    addAddress: '', // 新增地址

    shopDetail: null, // 商家详情
    shopId: null, // 商铺Id

    cartList: {}, // 加入购物车的商品列表
    cartId: null, // 购物车Id
    sig: null, // 购物车sig ？？？

    remarkText: null, // 可选备注内容
    inputText: '', // 输入备注内容
    isInvoice: false, // 是否开发票
    newAddress: null, // 确认订单页新的地址
    isNeedVali: null, // 确认订单时是否需要验证

    orderParam: null, // 订单参数
    orderBackMsg: null, // 订单返回的信息
    orderDetail: null, // 订单详情

    question: null, // 问题详情
    cardPrice: null // 会员卡价格
  }
})

export default index
