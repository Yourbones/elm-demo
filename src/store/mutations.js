import {
  RECORD_ADDRESS,
  ADD_CART,
  REDUCE_CART,
  INIT_SHOOPINGCART,
  CLEAR_CART,
  RECORD_SHOPDETAIL,
  RECORD_USERINFO,
  GET_USERINFO,
  CONFIRM_REMARK,
  CONFIRM_INVOICE,
  CHOOSE_SEARCH_ADDRESS,
  SAVE_GEOHASH,
  CONFIRM_ADDRESS,
  CHOOSE_ADDRESS,
  NEED_VALIDATION,
  SAVE_CART_ID_SIG,
  SAVE_ORDER_PARAM,
  CHANGE_ORDER_PARAM,
  ORDER_SUCCESS,
  SAVE_SHOPID,
  SAVE_ORDER,
  OUT_LOGIN,
  RETSET_NAME,
  SAVE_AVANDER,
  SAVE_ADDDETAIL,
  SAVE_ADDRESS,
  SAVE_QUESTION,
  ADD_ADDRESS,
  BUY_CART
} from './mutation-type'

import {setStore, getStore} from '../utils/common-methods'

export default {
  // 记录当前经度纬度
  [RECORD_ADDRESS] (state,{
    latitude,
    longtitude
  }) {
    state.latitude = latitude;
    state.longtitude = longtitude;
  },
  // 记录商家详情信息
  [RECORD_SHOPDETAIL] (state, detail) {
    state.shopDetail = detail;
  },
  // 加入购物车
  [ADD_CART] (state, {
    shopId,  // 店铺Id
    category_id, // 分类Id
    item_id, // 选择个体Id
    food_id, // 食物Id
    name, // 食物名称
    price, // 食物价格
    specs, // 食物规格
    packing_fee, // 食物打包费
    sku_id, // 食物规格？
    stock   // 食物存量
  }) {
    let cart = state.cartList;
    let shop = (cart[shopId] || {});
    let category = (shop[category_id] || {});
    let item = (category[item_id] || {});
    if (item && item[food_id]) {
      item[food_id]['num']++;
    } else {
      item[food_id] = {
        "num" : 1,
        "id" : food_id,
        "name" : name,
        "price" : price,
        "specs" : specs,
        "packing_fee" : packing_fee,
        "sku_id" : sku_id,
        "stock" : stock
      };
    }
    state.cartList = {...cart};
    //存入localStorage
    setStore('buyCart', state.cartList);
  },
  // 移出购物车
  [REDUCE_CART] (state, {
    shop_id,
    category_id,
    item_id,
    food_id,
    name,
    price,
    specs
  }) {
    let cart = state.cartList
    let shop = (cart[shop_id] || {})
    let category = (shop[category_id] || {})
    let item = (category[item_id] || {})
    if (item && item[food_id]) {
      if (item[food_id]['num'] > 0) {
        item[food_id]['num']--;
        state.cartList = {...cart};
        // 存入localStorage
        setStore('buyCart', state.cartList);
      } else {
        // 商品数量为0，则清空当前商品的信息
        item[food_id] = null;
      }
    }
  },
  // 网页初始化时从本地缓存获取购物车数据
  [INIT_SHOOPINGCART] (state) {
    let initCart = getStore('buyCart');
    if (initCart) {
      state.cartList = JSON.parse(initCart);
    }
  },
  // 清空当前商品的购物车信息
  [CLEAR_CART] (state, shop_id) {
    state.cardList[shop_id] = null;
    state.cardList = {...state.cardList};
      // 存入localStorage
    setStore('buyCart', state.cardList)
  },
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info;
    state.isLogin = true;
    // 把user_id存入localStorage
    setStore('user_id', info.user_id);
  },
  // 获取用户信息存入 Vuex
  [GET_USERINFO] (state, info) {
    if (state.userInfo && (state.userInfo.userName !== info.userName)) {
      return;
    }
    if (!state.isLogin) {
      return;
    }
    if (!info.message) {
      state.userInfo = {...info};
    } else {
      state.userInfo = null;
    }
  },
  // 修改用户名
  [RETSET_NAME] (state, userName) {
    state.userInfo = Object.assign({}, state.userInfo, {userName})
  },
  // 保存商家Id
  [SAVE_SHOPID] (state, shop_id) {
    state.shop_id = shop_id;
  },
  // 记录订单页面用户选择的备注，传递给订单确认页面
  [CONFIRM_REMARK] (state, {
    remarkText,
    inputText
  }) {
    state.remarkText = remarkText;
    state.inputText = inputText;
  },
  // 是否开发票
  [CONFIRM_INVOICE] (state, invoice) {
    state.isInvoice = invoice;
  },
  // 选择搜索的地址
  [CHOOSE_SEARCH_ADDRESS] (state, place) {
    state.searchAddress = place;
  },
  // 保存 geohash
  [SAVE_GEOHASH] (state, geohash) {
    state.geohash = geohash;
  },
  // 确认订单页添加新的地址
  [CONFIRM_ADDRESS] (state, newAddress) {
    state.newAddress.push(newAddress);
  },
  // 选择的地址
  [CHOOSE_ADDRESS] (state, {
    address,
    index
  }) {
    state.choosedAddress = address;
    state.addressIndex = index;
  },
  // 保存下单需要验证的返回值
  [NEED_VALIDATION] (state, isNeedVali) {
    state.isNeedVali = isNeedVali;
  },
  // 保存下单后购物id和sig
  [SAVE_CART_ID_SIG] (state, {
    cart_id,
    sig
  }) {
    state.cartId = cart_id;
    state.sig = sig;
  },
  // 保存下单参数, 用户验证页面调用
  [SAVE_ORDER_PARAM] (state, orderParam) {
    state.orderParam = orderParam;
  },
  // 修改下单参数
  [CHANGE_ORDER_PARAM] (state, newParam) {
    state.orderParam = Object.assign({}, state.orderParam, newParam)
  },
  // 下单成功，保存订单返回信息
  [ORDER_SUCCESS] (state, order) {
    state.cardPrice = null;
    state.orderBackMsg = order;
  },
  // 进入订单详情页前保存该订单信息
  [SAVE_ORDER] (state, orderDetail) {
    state.orderDetail = orderDetail;
  },
  // 退出登录
  [OUT_LOGIN] (state) {
    state.userInfo = {};
    state.isLogin  = false;
  },
  // 保存图片
  [SAVE_AVANDER] (state, imgPath) {
    state.avatarUrl = imgPath;
  },
  // 删除地址列表
  [SAVE_ADDRESS] (state, newAddress) {
    state.removeAddress = newAddress;
  },
  // 添加地址名
  [SAVE_ADDDETAIL] (state, address) {
    state.addAddress = address;
  },
  // 保存所选问题标题和详情
  [SAVE_QUESTION] (state, question) {
    state.question = {...question};
  },
  // 增加地址
  [ADD_ADDRESS] (state, obj) {
    state.removeAddress = [obj, ...state.removeAddress];
  },
  // 会员卡价格记录
  [BUY_CART] (state, price) {
    state.cardPrice = price;
  }

}























