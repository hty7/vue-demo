// 元素隐藏显示指令
export default {
  // 只调用一次，指令第一次绑定到元素时调用
  bind (el, binding, vnode) {
    el.style.visibility = binding.value ? 'visible' : 'hidden'
  },
  // 被绑定元素插入父节点时调用
  inserted (el, binding, vnode) {
  },
  // 所在组件的 VNode 更新时调用
  update (el, binding, vnode) {
    el.style.visibility = binding.value ? 'visible' : 'hidden'
  },
  // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
  componentUpdated (el, binding, vnode) {
  },
  unbind (el, binding, vnode) {
  }
}
