module.exports = {
  configureWebpack : {
    resolve : {
      alias : {
        'commom' : '@/common',
        'components' : '@/components',
        'api' : '@/api',
        'views' : '@/views',
      }
    }
  },
  devServer: {
    /* 解决跨域问题
        cli默认安装的插件http-proxy-middleware

      在程序中看，
        我们不需要直接请求 http://localhost:4000/index_category 这个地址，
        也不是请求 http://localhost:8080/index_category 这个地址，
        而是请求 /api/index_category 这个地址
      没有代理这毫无疑问是个错误的路径，有了代理，代理绕过浏览器去请求：
        http://localhost:4000/api/index_category
      虽然现在不会被跨域拦截，但是这个路径也不对，因为多了个'/api'，所以想去掉它，
        通过设置proxy.pathRewrite来统一去掉路径中的'/api'，这样代理实际请求的URL就变成：
        http://localhost:4000/index_category
      这是正确的实际地址！
      但是由于代理绕开了浏览器，打开浏览器检查，请求路径显示的却是 http://localhost:8080/api/index_category
    */
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}