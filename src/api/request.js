/* 传入axios请求配置，返回一个对应的Promise */ 

import axios from 'axios'

export default function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 3000
  })

  instance.interceptors.request.use(function(config) {
    //发送请求的拦截
    return config
  }, function(error) {
    //对请求错误做一些处理
    return Promise.reject(error)
  })
  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  return instance(config)
}