<template>
  <baidu-map mapWidth="100%" mapHeight="100vh" @ready="initReady"></baidu-map>
</template>

<script>
import BaiduMap from '@/components/BaiduMap'
export default {
  components: {
    BaiduMap
  },
  data: () => ({
    loading: false
  }),
  methods: {
    initReady ({BMap, map}) {
      // 设置点
      // let point = new BMap.Point(116.404, 39.915)
      // map.centerAndZoom(point, 15)
      // let marker = new BMap.Marker(point)
      // map.addOverlay(marker)
      // console.log(BMap, map)
      // 设置面
      // map.centerAndZoom(new BMap.Point(116.404, 39.915), 15)
      // map.enableScrollWheelZoom()
      // // 创建多边形
      // let polygon = new BMap.Polygon([
      //   new BMap.Point(116.387112, 39.920977),
      //   new BMap.Point(116.385243, 39.913063),
      //   new BMap.Point(116.394226, 39.917988),
      //   new BMap.Point(116.401772, 39.921364),
      //   new BMap.Point(116.41248, 39.927893)
      // ], {strokeColor: 'blue', strokeWeight: 2, strokeOpacity: 0.5})
      // // 增加多边形
      // map.addOverlay(polygon)
      // polygon.enableEditing()
      // 设置路线图
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 15)
      let myP1 = new BMap.Point(116.380967, 39.913285)
      let myP2 = new BMap.Point(116.424374, 39.914668)
      let driving = new BMap.DrivingRoute(map, {renderOptions: {map: map, autoViewport: true}})
      driving.search(myP1, myP2)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
