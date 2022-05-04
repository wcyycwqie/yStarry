/*
 * @Author: Chaoyue
 * @Date: 2021-12-02 11:13:39
 * @LastEditors: Chaoyue
 * @LastEditTime: 2022-05-04 11:56:36
 * @FilePath: \yStarry\src\api\request.js
 * @FileDescribe: 
 */
import axios from 'axios'

const host = window.location.host;
const hostname = window.location.hostname;
let Env = hostname.indexOf('yfunny.cool') > -1 ? 'pro' : 'dev'

const request = axios.create({
    baseURL: Env === 'pro' ? `https://${hostname}` : 'http://127.0.0.1',
    timeout: 5000,
    // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

//  请求拦截器
request.interceptors.request.use(async config => {

    return config
}, error => {
    return Promise.reject
}
)

//  响应拦截器
request.interceptors.response.use(response => {
    const res = response.data

    if (res.code === 200) {
        return res
    } else {
        alert(res.msg)
    }
    return res
}, error => {
    return Promise.reject(error)
})

export default request
