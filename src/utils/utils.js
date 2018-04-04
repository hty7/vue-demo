/**
 * 存储localStorage
 */
export const setLocalStorage = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getLocalStorage = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeLocalStorage = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 *  获取cookie
 */
export const getCookie = (name, defaultValue) => {
  let arr = null
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return defaultValue
  }
}
