import {
    reqGetGoodsInfo,
    reqGetUserLike,
    reqAddWantList,
    reqAddReply,
    reqGetClass,
    reqGetGoodsList,
    reqGetMainGoodsList
} from '@/api'
export default {
    namespaced: true,
    actions: {
        //获取商品信息
        async getGoodsInfo({
            commit
        }, goods_id) {
            let result = await reqGetGoodsInfo(goods_id)
            if (result.status == 200) {
                commit('GETGOODSINFO', {
                    ...result.tgoodsinfo,
                    wantshow: result.wantshow,
                    isbuy: result.isbuy,
                    seeuserinfo: result.seeuserinfo
                })
            } else {
                return Promise.reject(new Error('获取商品详情失败'))
            }
        },
        //点赞商品
        async getUserLike({
            commit
        }, goods_id) {
            let result = await reqGetUserLike(goods_id)
            if (result.status == 200) {
                return '点赞成功'
            } else {
                return Promise.reject(new Error(result.messgae))
            }
        },
        async addWantList({
            commit
        }, goods_id) {
            let result = await reqAddWantList(goods_id)
            if (result.status == 200) {
            
                return '收藏成功'
            } else {
                return Promise.reject(new Error(result.messgae))
            }
        },
        async addReply({
            commit
        }, data) {
       
            let result = await reqAddReply(data.goods_id, data.replytitle)
            if (result.status == 200) {
                return '留言成功'
            } else {
                return Promise.reject(new Error(result.messgae))
            }
        },
        async getClass({
            commit
        }) {
            let result = await reqGetClass()
        
            if (result.status == 200) {
                commit('GETCLASS', result.data)
                return '获取成功'
            } else {
                return Promise.reject(new Error(result.messgae))
            }
        },
        //分类分页获取商品列表
        async getGoodsList({
            commit
        }, params) {
          
            let result = await reqGetGoodsList(params)
            if (result.status == 200) {
                commit('GETGOODSLIST', {
                    ...result.goodsList,
                })
                commit('GETGOODSCOUNT', result.goodscount)
            }
        },
        //获取个人发布商品列表
        async getMainGoodsList({
            commit
        }, phone_id) {
            let result = await reqGetMainGoodsList(phone_id)
         
            if (result.status == 200) {
                commit('GETMAINGOODSLIST', result.maingoodlist)
                return 'ok'
            } else {
                return Promise.reject(new Error(result.messgae))
            }
        }
    },
    mutations: {
        GETGOODSINFO(state, goodsinfo) {
            state.goodsinfo = goodsinfo
        },
        GETCLASS(state, classList) {
            state.classList = classList
        },
        GETGOODSLIST(state, goodsInfoList) {
            state.goodsInfoList = goodsInfoList
        },
        GETGOODSCOUNT(state, goodsCount) {
            state.goodsCount = goodsCount
        },
        GETMAINGOODSLIST(state, mainGoodsList) {
            state.mainGoodsList = mainGoodsList
        },
        GEtWANTSTATUS(state,)
        {

        }
    },
    state: {
        goodsinfo: {},
        classList: [],
        goodsInfoList: [],
        goodsCount: 0,
        mainGoodsList: [],
    },
    getters: {

    },

}