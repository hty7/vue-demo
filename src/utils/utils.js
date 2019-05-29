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
* 设置sessionStorage
*/
export const setSessionStorage = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}

/**
* 获取sessionStorage
*/
export const getSessionStorage = name => {
  if (!name) return
  return window.sessionStorage.getItem(name)
}

/**
* 删除sessionStorage
*/
export const removeSessionStorage = name => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}

/**
* 获取cookie
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

/**
* 阻止弹窗后页面的滚动
*/
export const preventScroll = (ev) => {
  let bodyDom = document.body
  if (ev) {
    bodyDom.style.cssText = 'overflow-y: hidden;'
  } else {
    bodyDom.style.cssText = 'overflow-y: initial;'
  }
}
