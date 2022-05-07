import {
    reqUserlogin,
    reqRegister,
    reqGetCode
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
            console.log(result);
            if (result.status == 200) {
                
            commit('USERLOGIN',result.token)
                return '登录成功'
            } else {
                return Promise.reject(new Error(result.message));
            }
        }

    },
    mutations: {
        GETCODE(state, phonecode) {
            state.phonecode = phonecode
        },

        USERLOGIN(state,token)
        {
        state.token=token
        localStorage.setItem('token',token)
        }
    },
    state: {
        phonecode: '',
        token: localStorage.getItem('token')
    },
    getters: {

    }
}