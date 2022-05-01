import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false
//按需引入vant
import '@/plugins/vant'
import * as api  from '@/api'
import  Tabbar  from '@/components/Tabbar'
//注册search组件为全局zuj
import Searchinput from '@/components/Searchinput'
Vue.component('Searchinput',Searchinput)
Vue.component(Tabbar.name,Tabbar)
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$api=api
  }
}).$mount('#app')