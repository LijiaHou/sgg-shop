/*
  包含n个接口请求函数(函数的返回值: promise对象)的模块
*/

import request from './request'

// 1、根据经纬度获取位置详情
export function reqAddress(geohash) {
  return request({
    url: `/position/${geohash}`
  })
}
// 2、获取食品分类列表
export function reqFoodCategorys() {
  return request({
    url: '/index_category'
  })
}
// 3、根据经纬度获取商铺列表
export function reqShops(longitude, latitude) {
  return request({
    url: '/shops',
    params: {
      'longitude': longitude,
      'latitude': latitude
    }
  })
}
// 4、根据经纬度和关键字搜索商铺列表
export function reqSearchShop(geohash, keyword) {
  return request({
    url: '/search_shops',
    params: {
      'geohash': geohash,
      'keyword': keyword
    }
  })
}
// 5、获取一次性验证码
export function reqVerifyCode() {
  return request({
    url: '/captcha'
  })
}
// 6、用户名密码登陆
export function reqSearchShop(name, pwd, captcha) {
  return request({
    url: '/login_pwd',
    method: 'post',
    data: {
      'name': name,
      'pwd': pwd,
      'captcha': captcha
    }
  })
}
// 7、发送短信验证码
export function reqSendCode(phone) {
  return request({
    url: '/sendcode',
    params: {
      'phone': phone
    }
  })
}
// 8、手机号验证码登陆
export function reqSmsLogin(phone, code) {
  return request({
    url: '/login_sms',
    method: 'post',
    data: {
      'phone': phone,
      'code': code
    }
  })
}
// 9、根据会话获取用户信息
export function reqUserInfo() {
  return request({
    url: '/userinfo'
  })
}
// 10、用户登出
export function reqLogout() {
  return request({
    url: '/logout'
  })
}


/**
 * 获取商家信息
 */
export function reqShopInfo() {
  return request({
    url: '/info'
  })
}

/**
 * 获取商家评价数组
 */
export function reqShopRatings() {
  return request({
    url: '/ratings'
  })
}

/**
 * 获取商家商品数组
 */
export function reqShopGoods() {
  return request({
    url: '/goods'
  })
}
