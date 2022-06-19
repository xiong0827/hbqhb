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
      '/news': {
        target: 'https://api.gugudata.com',
        ws: true,
        changeOrigin: true,
        // pathRewrite:{'^views':'/'},
      },
  
    },
    historyApiFallback: true,
    allowedHosts: "all",
  },
  publicPath: './',

})