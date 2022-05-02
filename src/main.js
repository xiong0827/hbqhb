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
//注册backtop
import Backtop from '@/components/Backtop'
Vue.component('Backtop',Backtop)
//注册表backleft
import Backleft from '@/components/Backleft'
Vue.component('Backleft',Backleft)
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$api = api
  }
}).$mount('#app')