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

/**
 *  获取浏览器配置语言
 */
export const getNavigatorLang = (language) => {
  let type = navigator.appName
  let lang = null
  if (type === 'Netscape') {
    lang = navigator.language // 获取非IE浏览器语言
  } else {
    lang = navigator.userLanguage // 获取IE5+浏览器语言
  }
  switch (lang) {
    case 'zh-CN':
      return 'zh'
    case 'en-US':
      return 'en'
    default:
      return 'zh'
  }
}
