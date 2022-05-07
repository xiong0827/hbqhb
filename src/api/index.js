//所有的api接口统一管理
import requests from '@/api/request'
import mockAjax from '@/api/mockAjax'
import qs from 'qs'
import goods from '@/store/goods'
//login
export const reqUserlogin = (data) => requests({ url: 'api/loginuser', method: 'post',data: qs.stringify(data) })
//register
export const reqRegister = (data) => requests({ url: '/api/register', method: 'post', data: qs.stringify(data) })
//reqGetCode
export const reqGetCode = (data) => requests({ url: '/api/getcode', method: 'post', data: qs.stringify(data) })
//上传商品
export const reqIssuegoods=(data)=>requests({url:'/commodity/issuegoods',method:'post',data})
//获取商品详情
export const reqGetGoodsInfo=(goods_id)=>requests({url:`/commodity/getgoodsinfo`,method:'get',params:{goods_id}})
//点赞商品getuserlike

export const reqGetUserLike=(goods_id)=>requests({url:'/commodity/getuserlike',method:'get',params:{goods_id}})
//收藏商品或取消
export const reqAddWantList=(goods_id)=>requests({url:'/commodity/addwantlist',method:'post',params:{goods_id}})
//商品留言
export const reqAddReply=(goods_id,replytitle)=>requests({url:'/commodity/replygoods',method:'post',params:{goods_id},data:qs.stringify({replytitle:replytitle})})
//分类分页排序展示商品
export const reqGetGoodsList=(data)=>requests({url:'/commodity/getgoodslist',method:'post',data:qs.stringify(data)})
//获取分类
export const reqGetClass=()=>requests({url:'/commodity/getclass',method:'get'})