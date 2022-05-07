import {
    reqGetGoodsInfo,
    reqGetUserLike,
    reqAddWantList,
    reqAddReply,
    reqGetClass,
    reqGetGoodsList
} from '@/api'
export default {
    namespaced: 'true',
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
                console.log(result);
                return '收藏成功'
            } else {
                return Promise.reject(new Error(result.messgae))
            }
        },
        async addReply({
            commit
        }, data) {
            console.log(data.replytitle);
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
            console.log(result);
            if (result.status == 200) {
                commit('GETCLASS', result.data)
                return '获取成功'
            } else {
                return Promise.reject(new Error(result.messgae))
            }
        },
        //获取商品列表
        async getGoodsList({
            commit
        }, params) {
            console.log(params);
            let result = await reqGetGoodsList(params)
            console.log(result);
            if (result.status == 200) {
                commit('GETGOODSLIST', {
                    ...result.goodsList,
                    goodscount: result.goodscount
                })
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
        }
    },
    state: {
        goodsinfo: {},
        classList: [],
        goodsInfoList: []
    },
    getters: {

    },

}