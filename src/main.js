import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false
//按需引入vant
import '@/plugins/vant'



import * as api from '@/api'
import Tabbar from '@/components/Tabbar'
import UpLoader from '@/components/UpLoader'
import Selectsite from '@/components/Selectsite'
import AddressEdit from '@/components/AddressEdit'
import Share from '@/components/Share'
//注册search组件为全局zuj
import Searchinput from '@/components/Searchinput'
Vue.component('Searchinput', Searchinput)
Vue.component(Tabbar.name, Tabbar)
//注册backtop
import Backtop from '@/components/Backtop'
import VueLazyload from 'vue-lazyload'
Vue.component('Backtop', Backtop)
//注册表backleft
import Backleft from '@/components/Backleft'
Vue.component('Backleft', Backleft)
Vue.component(UpLoader.name, UpLoader)
//注册单个文件上传
import UpLoaderOne from '@/components/UpLoadOne'
Vue.component(UpLoaderOne.name, UpLoaderOne)
Vue.component(Selectsite.name, Selectsite)
Vue.component(AddressEdit.name, AddressEdit)
Vue.component(Share.name, Share)
//懒加载
// Vue.use(Lazyload, {
//   lazyComponent: true,
// });
const errorimage=require('./assets/images/err.png')
const loadimage=require('./assets/images/2.png')
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1
})
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$api = api
  }
}).$mount('#app')