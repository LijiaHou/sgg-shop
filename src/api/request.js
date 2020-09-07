/* 传入axios请求配置，返回一个对应的Promise，返回的数据直接是response.data*/ 

import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 3000,
  })

  // instance.interceptors.request.use(function(config) {
  //   //发送请求的拦截
  //   return config
  // }, function(error) {
  //   //对请求错误做一些处理
  //   return Promise.reject(error)
  // })
  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }
  // , function (error) {
  //   // 对响应错误做点什么
  //   return Promise.reject(error);
  // }
  );

  // 发送请求
  return instance(config)
}

// 专门用于请求Mock的
export function requestMock(config) {
  const instance = axios.create({
    timeout: 3000,
  })
  instance.interceptors.response.use(function (response) {
    return response.data;
  });
  return instance(config)
}
