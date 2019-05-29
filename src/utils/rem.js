!function (n) {
  let e = n.document,
	t = e.documentElement,
	i = 720,
	d = i / 100,
	o = 'orientationchange' in n ? 'orientationchange' : 'resize'
	let a = function() {
		var n = t.clientWidth || 320
		n > 720 && (n = 720)
		t.style.fontSize = n / d + 'px'
  }
	e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener('DOMContentLoaded', a, !1))
}(window)
