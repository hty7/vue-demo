import axios from 'axios'

// axios 配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = ''
/**
 * http request    拦截器
 * token           判断是否存在token，如果存在的话，则http header加上token
 */
axios.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response.use(res => {
  if (res.data.code) {
    return res.data
  }
  return Promise.reject(res.state.msg)
}, err => {
  return Promise.reject(err)
})

export default axios
