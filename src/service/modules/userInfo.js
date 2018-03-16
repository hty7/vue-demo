export const getCurrentUser = param => {
  return this.axios.get(`/reg/user/get/${param}`, param)
}
