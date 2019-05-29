var Toast = {}
Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'bottom',
    duration: '2500'
  }
  for (let property in options) {
    opt[property] = options[property]
  }
  Vue.prototype.$toast = (tips, type, duration) => {
    if (type) opt.defaultType = type
    if (duration) opt.duration = duration
    if (document.getElementsByClassName('vue-toast').length) return
    // 创建构造器，定义好提示信息的模板
    let ToastTpl = Vue.extend({
      template: `<div class='vue-toast toast-${opt.defaultType}'>${tips}</div>`
    })
    // 创建实例，挂载到文档以后的地方
    let tpl = new ToastTpl().$mount().$el
    // 把创建的实例添加到body中
    document.body.appendChild(tpl)
    setTimeout(function () {
      document.body.removeChild(tpl)
    }, opt.duration)
  }
  // 显示不同位置
  ['bottom', 'center', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips, type)
    }
  })
}
module.exports = Toast
