//所有的api接口统一管理
import requests from '@/api/request'
import mockAjax from '@/api/mockAjax'
import qs, { stringify } from 'qs'
//login
export const reqlogin = (phone_id, password) => requests({ url: 'api/loginuser', method: 'post' })
//register
export const reqregister = (data) => requests({ headers: { 'content-type': 'application/x-www-form-urlencoded' }, url: '/api/register', method: 'post', data: qs.stringify(data) })