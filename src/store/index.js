import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import modules from './modules'
import getters from './getters'

Vue.use(Vuex)

const state = {
  latitude: 43.62,  //纬度
  longitude: 122.27,  //经度
  address: {},  //地址信息的对象
  categorys: [],  //分类数组
  shops: [],  //商家的数组
  userInfo: {},   //用户信息
  goods: {},   //商品列表
  ratings: {},   //商品评价
  info: {},   //商家信息
  cartFoods: [],   //购物车中的食物
}

let store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})

export default store
