//actions

import {
  SET_ADDRESS,
  SET_CATEGORYS,
  SET_SHOPS,
  SET_USERINFO,
  RESET_USERINFO,
  SET_GOODS,
  SET_RATINGS,
  SET_INFO,
  INCREAMENT_FOOD_COUNT,
  DECREAMENT_FOOD_COUNT,
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys, 
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api'


export default {
  // 异步获取地址
  getAddress({commit, state}) {
    // 发送异步请求
    const geohash = state.latitude + ',' + state.longitude
    reqAddress(geohash)
      .then((result) => {
        // 提交mutation
        if(result.code === 0){
          const address = result.data
          commit(SET_ADDRESS, {address})
        }
      })
      .catch((err) => {
        console.log('呀，getAddress()出错了！' + err);
      })
  },

  // 异步获取食品分类列表
  getCategorys({commit}) {
    // 发送异步请求
    reqFoodCategorys()
      .then((result) => {
        // 提交mutation
        if(result.code === 0){
          const categorys = result.data
          commit(SET_CATEGORYS, {categorys})
        }
      })
      .catch((err) => {
        console.log('呀，getCategorys()出错了！' + err);
      })
  },

  // 异步获取商家列表
  getShops({commit, state}) {
    // 发送异步请求
    reqShops(state.longitude, state.latitude)
      .then((result) => {
        // 提交mutation
        if(result.code === 0){
          const shops = result.data
          commit(SET_SHOPS, {shops})
        }
      })
      .catch((err) => {
        console.log('呀，getShops()出错了！' + err);
      })
  },

  // 同步记录用户信息
  recordUser({commit}, userinfo) {
    commit(SET_USERINFO, {userinfo})
  },

  // 异步获取用户信息
  getUserInfo({commit}) {
    reqUserInfo()
      .then((result) => {
        if(result.code === 0){
          const userinfo = result.data
          commit(SET_USERINFO, {userinfo})
        }
      })
      .catch((err) => {
        console.log('呀，getUserInfo()出错了！' + err);
      })
  },

  // 异步登出
  logOut({commit}) {
    reqLogout()
      .then((result) => {
        if(result.code === 0){
          commit(RESET_USERINFO)
        }
      })
      .catch((err) => {
        console.log('呀，logOut()出错了！' + err);
      })
  },

  // 异步获取商家食物列表
  getShopGoods({commit}, callback) {
    reqShopGoods()
      .then((result) => {
        if(result.code === 0){
          const goods = result.data
          commit(SET_GOODS, {goods})
          // 数据已经获取到了，执行回调
          callback && callback()
        }
      })
      .catch((err) => {
        console.log('呀，getShopGoods()出错了！' + err);
      })
  },

  // 异步获取商家评价列表
  getShopRatings({commit}) {
    reqShopRatings()
      .then((result) => {
        if(result.code === 0){
          const ratings = result.data
          commit(SET_RATINGS, {ratings})
        }
      })
      .catch((err) => {
        console.log('呀，getShopRatings()出错了！' + err);
      })
  },

  // 异步获取商家信息列表
  getShopInfo({commit}) {
    reqShopInfo()
      .then((result) => {
        if(result.code === 0){
          const info = result.data
          commit(SET_INFO, {info})
        }
      })
      .catch((err) => {
        console.log('呀，getShopInfo()出错了！' + err);
      })
  },

  // 同步更新food中的count值
  updateFoodCount({commit}, {flag, food}) {
    if(flag == 1) {
      commit(INCREAMENT_FOOD_COUNT, {food})
    }else {
      commit(DECREAMENT_FOOD_COUNT, {food})
    }
  }
}




