const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭es效验
  lintOnSave:false,
  devServer:{
  
    // proxy: {
    //   '/api': { //请求的前缀为/api就代理发送
    //     target: 'http://12',
    //     // path7Rewrite:{'^api':''},dawdawjdjawodajwdoaiwjdoawijd
    //     ws: true,  //用于支持websocket
    //     changeOrigin: false //对服务器说谎
    //   },
    
    // },
    // 代理host
    // historyApiFallback: true,
    // allowedHosts: "all",
  }
})
