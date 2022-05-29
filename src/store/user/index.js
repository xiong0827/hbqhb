import {
    reqUserlogin,
    reqRegister,
    reqGetCode,
    reqGetUserInfo,
    reqUpdateInfo,
    reqUpDatePassword,
    reqUpdateUserAvatar
} from '@/api'

export default {
    namespaced: 'true',
    actions: {
        //注册
        async Register({
            commit
        }, data) {
            let result = await reqRegister(data);
            if (result.status == 200) {
                return '注册成功'
            } else {
                return Promise.reject(new Error(result.message));
            }
        },
        //获取验证码
        async getCode({
            commit
        }, data) {
            let result = await reqGetCode(data)
            if (result.status == 200) {
                commit('GETCODE', result.data[0])
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message));

            }
        },
        //
        async userLogin({
            commit
        }, data) {
            let result = await reqUserlogin(data)

            if (result.status == 200) {

                commit('USERLOGIN', result.token)
                return '登录成功'
            } else {
                return Promise.reject(new Error(result.message));
            }
        },
        //获取用户信息
        async getUserInfo({
            commit
        }, phone_id) {
            let result = await reqGetUserInfo(phone_id)

            if (result.status == 200) {
                commit('GETUSERINFO', result.userinfolist)
                return 'ok'
            } else {
                localStorage.removeItem('token')
                return Promise.reject(new Error(result.message));

            }
        },
        //获取发布者用户信息
        async getIsserUserInfo({
            commit
        }, phone_id) {
            let result = await reqGetUserInfo(phone_id)
            if (result.status == 200) {
                commit('GETISSERUSERINFO', result.userinfolist)
                return 'ok'
            } else {
                localStorage.removeItem('token')
                return Promise.reject(new Error(result.message));

            }
        },
        //修改用户信息
        async updateInfo({
            commit
        }, data) {
            let result = await reqUpdateInfo(data)
            console.log(data);
            console.log(result);
            if (result.status == 200) {
                return '修改成功'
            } else {
                return Promise.reject('修改失败')
            }
        },
        //修改用户信息
        async updateUserAvatar({commit},data)
        {
        const result=await reqUpdateUserAvatar(data)
       
        if (result.status==200) {
            return '修改头像成功'
        }
        else{
            return Promise.resolve(new Error('修改头像失败'))
        }
        },
        //修改用户密码
        async upDatePassword({
            commit
        }, data) {
            let result = await reqUpDatePassword(data)

            if (result.status == 200) {
                return result.message
            } else {
                return Promise.reject(new Error(result.message))
            }
        }

    },
    mutations: {
        GETCODE(state, phonecode) {
            state.phonecode = phonecode
        },

        USERLOGIN(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        //获取用户信息
        GETUSERINFO(state, userInfo) {
            state.userInfo = userInfo
        },
        GETISSERUSERINFO(state, issueper) {

            state.issueper = issueper
        }

    },
    state: {
        phonecode: '',
        token: localStorage.getItem('token'),
        userInfo: {},
        issueper: {}
    },
    getters: {
        uwantlist(state) {
            return state.userInfo.uwantlist
        }
    }
}