import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

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
router.beforeEach((to,from,next)=>{
  // if (to.name=='welcome'||to.name=='login'||to.name=='register') {
  //   if (localStorage.getItem('token')) {
  //     next({name:'home'})
  //   }
  //   else{
     
  //     next()
  //   }
  // }
  // if ( to.name=='classify'|| to.name=='add'||to.name=='goodsinfo') {
  //   if (localStorage.getItem('token')=='') {
  //   return  next(false)
  //   }
  //   else{
  //     next()
  //   }
  // }
  if(localStorage.getItem('token'))
  {
    if (to.name=='welcome'||to.name=='login'||to.name=='register') {
      next({name:'home'})
    }
    else{
      next()
    }
  }
  else{
    console.log(to.name);
    if ( to.name=='classify'|| to.name=='add'||to.name=='goodsinfo'||to.name=='releasegoods')
    {
      next({name:from.name})
    }
  }
      next()
})
export default router
