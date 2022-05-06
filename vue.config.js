const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭es效验
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '',
        // }
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }

})