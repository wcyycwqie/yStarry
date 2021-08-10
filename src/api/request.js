import axios from 'axios'

const host = window.location.host;
let Env;
if (host === 'http://www.yfunny.cool/') {
    Env = 'pro'    
} else {
    Env = 'dev'
}

const request = axios.create({
    baseURL: Env === 'pro' ? host : 'http://127.0.0.1',
    timeout: 5000,
    // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

// request.interceptors.request.use(
//     function (config) {

//     }, function (err) {
//         return Promise.reject(err)
//     }
// )

// request.interceptors.response.use(res => {
//     return res
// }, err => {
//     return Promise.reject(err)
// })

export default request
