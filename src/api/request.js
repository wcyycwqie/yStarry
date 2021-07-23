import axios from 'axios'

const request = axios.create({
    baseURL: 'http://192.168.1.137',
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
