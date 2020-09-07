//modules
import Vue from 'vue'

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
  CLEAR_CART
} from './mutation-types'

export default {
  [SET_ADDRESS] (state, {address}) {
    state.address = address
  },

  [SET_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [SET_SHOPS] (state, {shops}) {
    state.shops = shops
  },

  [SET_USERINFO] (state, {userinfo}) {
    state.userInfo = userinfo
  },

  [RESET_USERINFO] (state) {
    state.userInfo = {}
  },

  [SET_GOODS] (state, {goods}) {
    state.goods = goods
  },

  [SET_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },

  [SET_INFO] (state, {info}) {
    state.info = info
  },

  [INCREAMENT_FOOD_COUNT] (state, {food}) {
    if(!food.count) { //第一次点击，新增一个属性
      // food.count = 1
      // 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的,因为 Vue 无法探测普通的新增 property
      Vue.set(food, 'count', 1)
      // 将food添加到cartFoods中
      state.cartFoods.push(food)
    }else {
      food.count++
    }
  },

  [DECREAMENT_FOOD_COUNT] (state, {food}) {
    if(food.count > 0) {
      food.count--
      if(food.count <= 0) {
        // 将food移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },

  // 清空cartFoods
  [CLEAR_CART] (state) {
    state.cartFoods.forEach((food) => {
      food.count = 0
    })
    state.cartFoods = []
  }
}
