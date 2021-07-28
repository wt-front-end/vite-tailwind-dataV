import axios from 'axios'

const baseURL = '/prod-api'
// 创建 axios 实例
const request = axios.create({
  baseURL: baseURL, // api base_url
  timeout: 600000 // 请求超时时间
})

const err = error => {
  if (error.response) {
    console.log(error.response)
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  return config
}, err)


// response interceptor
request.interceptors.response.use(response => {
  // 业务代码报错 code!==0时错误提示
  console.log(response)
  return response.data
}, err)


export { request as axios }
