/*
  使用mockjs，提供mock数据接口
*/
var Mock = require('mockjs')
import data from './data.json'

// 返回goods的接口
Mock.mock('/goods', {code:0, data: data.goods})
// 返回rating的接口
Mock.mock('/ratings', {code:0, data: data.ratings})
// 返回info的接口
Mock.mock('/info', {code:0, data: data.info})

// 不需要导出，只需要保证执行了这个文件
