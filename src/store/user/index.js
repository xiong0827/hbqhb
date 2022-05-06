import { reqlogin, reqregister } from '@/api'

export default {
    namespaced: 'true',
    actions: {
        //注册
        async reqRegister({ commit }, data) {
            console.log(data);
            let result = await reqregister(data);
            console.log(result);
            // if (result.status == 200) {

            // } else {
            //     return Promise.reject(new Error("faile"));
            // }
        }
    },
    mutations: {

    },
    state: {

    },
    getters: {

    }
}