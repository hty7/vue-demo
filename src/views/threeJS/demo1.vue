<template>
  <div ref="demo1"></div>
</template>

<script>
import * as THREE from 'three'
// import * as TWEEN from 'tween'
export default {
  data: () => ({
  }),
  created () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      let scene = new THREE.Scene() // 场景
      
      let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000) // 相机.视场，长宽比，近面，远面
      camera.position.x = -20
      camera.position.y = 40
      camera.position.z = 30
      camera.lookAt(scene.position)

      let renderer = new THREE.WebGLRenderer({ antialias: true })// 渲染器
      // renderer.setClearColorHex(0xEEEEEE)
      renderer.setSize(window.innerWidth, window.innerHeight - 100)

      let axes = new THREE.AxisHelper(20) // 坐标轴

      // let planeGeometry = new THREE.PlaneGeometry(60,20,10,10) // 生成平面

      let geometry = new THREE.BoxGeometry(1, 1, 1)
      let material = new THREE.MeshNormalMaterial({ color: 0x00ff00 })// 材质
      let mesh = new THREE.Mesh(geometry, material) // 物体

      scene.add(axes) // 场景添加坐标轴
      scene.add(mesh) // 向该场景中添加物体

      renderer.render(scene, camera)
      this.$refs.demo1.append(renderer.domElement)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
