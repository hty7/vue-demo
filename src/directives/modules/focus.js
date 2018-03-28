// 聚焦指令
export default {
  bind (el, binding, vnode) {},
  inserted (el, binding, vnode) {
    el.focus()
  },
  update (el, binding, vnode) {},
  componentUpdated (el, binding, vnode) {},
  unbind (el, binding, vnode) {}
}
