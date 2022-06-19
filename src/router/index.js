import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
let originPush = VueRouter.prototype.push
Vue.use(VueRouter)
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve || reject) {
      originPush.call(this, location, resolve, reject)
  } else {
      originPush.call(this, location, () => {}, () => {})
  }
}

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
        y: 0
    }
},
})
export default router
