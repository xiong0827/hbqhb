import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from '@/store/user';
import goods  from '@/store/goods';
import order from '@/store/order';
export default new Vuex.Store({
  modules: {
    user,
    goods,
    order
  }
})
