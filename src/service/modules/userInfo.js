import axios from 'axios'
export const getCurrentUser = param => {
  console.log('dd2')
  return axios.get('/user/getUserInfo', param)
}
