const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap:false,
  //关闭es效验
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://101.43.12.130:3000',
        ws: true,
        changeOrigin: true,
        // pathRewrite:{'^views':'/'},
      },
      '/commodity': {
        target: 'http://101.43.12.130:3000',
        ws: true,
        changeOrigin: true,
      },
      '/user': {
        target: 'http://101.43.12.130:3000',
        ws: true,
        changeOrigin: true,
      },
      '/order': {
        target: 'http://101.43.12.130:3000',
        ws: true,
        changeOrigin: true,
      }
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  },
  publicPath: './',

})