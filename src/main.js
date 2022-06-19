import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

Vue.config.productionTip = false
//按需引入vant
import '@/plugins/vant'
import * as api from '@/api'
//注册backleft
import Backleft from '@/components/Backleft'
Vue.component('Backleft', Backleft)
//引入分页器全局组件
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$api = api
  }
}).$mount('#app')