//所有的api接口统一管理
import requests from '@/api/request'
import qs from 'qs'
//login
export const reqUserlogin = (data) => requests({ url: '/api/loginuser', method: 'post',data: qs.stringify(data) })
//register
export const reqRegister = (data) => requests({ url: '/api/register', method: 'post', data: qs.stringify(data) })
//reqGetCode
export const reqGetCode = (data) => requests({ url: '/api/getcode', method: 'post', data: qs.stringify(data) })
//上传商品
export const reqIssuegoods=(data)=>requests({url:'/commodity/issuegoods',method:'post',data})
//获取商品详情
export const reqGetGoodsInfo=(goods_id)=>requests({url:`/commodity/getgoodsinfo`,method:'get',params:{goods_id}})
//点赞商品getuserlike
//获取商品列表
export const reqGetMainGoodsList=(phone_id)=>requests({url:'/commodity/getmaingoodslist',method:'get',params:{phone_id}})

export const reqGetUserLike=(goods_id)=>requests({url:'/commodity/getuserlike',method:'get',params:{goods_id}})
//收藏商品或取消
export const reqAddWantList=(goods_id)=>requests({url:'/commodity/addwantlist',method:'post',params:{goods_id}})
//商品留言
export const reqAddReply=(goods_id,replytitle)=>requests({url:'/commodity/replygoods',method:'post',params:{goods_id},data:qs.stringify({replytitle:replytitle})})
//分类分页排序展示商品
export const reqGetGoodsList=(data)=>requests({url:'/commodity/getgoodslist',method:'post',data:qs.stringify(data)})
//获取分类
export const reqGetClass=()=>requests({url:'/commodity/getclass',method:'get'})
//获取个人详情
export const reqGetUserInfo=(phone_id)=>requests({url:'/user/getuserinfo',method:'get',params:{phone_id}})
//修改个人信息
export const reqUpdateInfo=(data)=>requests({url:'/user/updateinfo',method:'post',data:qs.stringify(data)})
//修改用户头像
export const reqUpdateUserAvatar=(data)=>requests({url:'/user/updateuseravatar',method:'post',data})
//修改密码 /user/updatepassword
export const reqUpDatePassword=(data)=>requests({url:'/user/updatepassword',method:'post',data:qs.stringify(data)})


//生成订单 /order/createorder
export const reqCreateOrder=(goods_id)=>requests({url:'/order/createorder',method:'post',params:{goods_id}})
//获取个人订单 /order/getmainorder
export const reqGetMainOrder=()=>requests({url:'/order/getmainorder',method:'get'})

//取消订单 /order/cancelOrder
export const reqCancelOrder=(order_id)=>requests({url:'/order/cancelorder',method:'post',params:{order_id}})
//删除订单 /order/deleteorder
export const reqDeleteOrder=order_id=>requests({url:'/order/deleteorder',method:'delete',params:{order_id}})
//获取订单详情 
export const reqGetOrderInfo=order_id=>requests({url:'/order/getorderinfo',method:'get',params:{order_id}})

//提交订单并支付 /order/updateorder
export const reqUpdateOrder=order_id=>requests({url:'/order/updateorder',method:'post',params:{order_id}})



