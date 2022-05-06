//所有的api接口统一管理
import requests from '@/api/request'
import mockAjax from '@/api/mockAjax'
import qs from 'qs'
//login
export const reqUserlogin = (data) => requests({ url: 'api/loginuser', method: 'post',data: qs.stringify(data) })
//register
export const reqRegister = (data) => requests({ url: '/api/register', method: 'post', data: qs.stringify(data) })
//reqGetCode
export const reqGetCode = (data) => requests({ url: '/api/getcode', method: 'post', data: qs.stringify(data) })
