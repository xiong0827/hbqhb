//对axios进行封装
import axios from 'axios'
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
// 1利用axios对象的方法create 去创建一个axios实列
//2.request就是axios 稍微配置一下

const requests = axios.create({
    //在给发请求的自动带上api
    //代表超时事件
    // baseUR:'/api',
    // responseType:'json',
    headers: {
        'content-type': 'application/x-www-form-urlencoded' //转换为key=value的格式必须增加content-type
    },
    // headers: { 'Content-Type': 'multipart/form-data' },
    timeout: 5000,
    // proxy: {
    //     protocol: 'http',
    //     host: '127.0.0.1',
    //     port: 3000,
    // },
});
//请求拦截器
requests.interceptors.request.use((config) => {
    //config是一个配置对象对象里面有一个属性很重要，header请求头
    // if (store.state.detail.uuid) {
    //     //请求头添加一个临时身份
    //     config.headers.userTempId = store.state.detail.uuid
    // }
    // if (store.state.user.token) {
    //     config.headers.token = store.state.user.token
    // }
    if (localStorage.getItem('token')) {
        config.headers.Authorization = localStorage.getItem('token')
    }
    nprogress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (err) => {
    return Promise.reject(new Error(err))
})
export default requests