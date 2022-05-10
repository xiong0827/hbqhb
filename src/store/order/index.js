import {
    reqCreateOrder,
    reqGetMainOrder,
    reqCancelOrder,
    reqDeleteOrder,
    reqGetOrderInfo,
    reqUpdateOrder
} from '@/api'
export default {
    namespaced: true,
    actions: {
        //生成订单
        async createOrder({
            commit
        }, goods_id) {
            let result = await reqCreateOrder(goods_id)
     
            if (result.status == 200) {
                return result
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //获取个人订单
        async getMainOrder({
            commit
        }) {
            let result = await reqGetMainOrder()

            if (result.status == 200) {

                commit('GETMAINORDER', result.orderList)
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //取消订单
        async cancelOrder({commit},order_id)
        {
            let result=await reqCancelOrder(order_id)
         
           if (result.status==200) {
               return result.message
           }
           else{
       
               return Promise.reject(new Error(result.message))
           }
        },
        //删除订单
        async deleteOrder({commit},order_id)
        {
            let result=await reqDeleteOrder(order_id)
            
            if (result.status==200) {
                return result.message
            }
            else{
        
                return Promise.reject(new Error(result.message))
            }
        },
        //获取商品详情
        async getOrderInfo({commit},order_id)
        {
            let result=await reqGetOrderInfo(order_id)
          
            if (result.status==200) {
                commit('GetORDERINFO',result.orderinfo)
                return result.message
            }
            else{
        
                return Promise.reject(new Error(result.message))
            }
        },
        //提交订单
        async updateOrder({commit},order_id)
        {
            let result =await reqUpdateOrder(order_id)
            if (result.status==200) {
              
                return result.message
            }
            else{
        
                return Promise.reject(new Error(result.message))
            }
        }
    },
    mutations: {
        GETMAINORDER(state, orderList) {

            state.orderList = orderList
        },
        //获取商品详情
        GetORDERINFO(state,orderInfo)
        {
        state.orderInfo=orderInfo
        }
    },
    state: {
        orderList: [],
        orderInfo:{},
    },
    getters: {

    }
}