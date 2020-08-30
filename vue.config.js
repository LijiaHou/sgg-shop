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
  }
}