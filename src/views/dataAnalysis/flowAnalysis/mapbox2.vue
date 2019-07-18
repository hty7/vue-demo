<template>
  <mapbox-map mapWidth="100%" mapHeight="100vh" @ready="initReady">
    <echart-scatter3d :barData="barData"></echart-scatter3d>
    <mapbox-layer layerData="guangdong.json" :mapboxMap="mapboxMap"></mapbox-layer>
    <mapbox-control></mapbox-control>
  </mapbox-map>
</template>

<script>
import gdData from '@/utils/guangdong.json'
import MapboxMap from '@/components/mapbox/MapBox'
import EchartScatter3d from '@/components/mapbox/children/EchartScatter3d'
import MapboxControl from '@/components/mapbox/tools/MapboxControl'
import MapboxLayer from '@/components/mapbox/overlays/MapboxLayer'
export default {
  components: {
    MapboxMap, EchartScatter3d, MapboxControl, MapboxLayer
  },
  data: () => ({
    loading: false,
    barData: [
      {name: '广州市', value: [113.475995, 23.417055]},
      {name: '深圳市', value: [114.032357, 22.675157]},
      {name: '珠海市', value: [113.234262, 22.167468]},
      {name: '汕头市', value: [116.442536, 23.305796]},
      {name: '佛山市', value: [112.994017, 23.032548]},
      {name: '韶关市', value: [113.590304, 24.844739]},
      {name: '湛江市', value: [110.064944, 21.335451]},
      {name: '肇庆市', value: [112.165740, 23.464062]},
      {name: '江门市', value: [112.687406, 22.397417]},
      {name: '茂名市', value: [110.886700, 21.850193]},
      {name: '惠州市', value: [114.413784, 23.131249]},
      {name: '梅州市', value: [116.123213, 24.307352]},
      {name: '汕尾市', value: [115.378103, 23.046161]},
      {name: '河源市', value: [114.794798, 23.867677]},
      {name: '阳江市', value: [111.782165, 22.068633]},
      {name: '清远市', value: [113.072816, 24.205702]},
      {name: '东莞市', value: [113.761870, 23.032629]},
      {name: '中山市', value: [113.388499, 22.531929]},
      {name: '潮州市', value: [116.623721, 23.779569]},
      {name: '揭阳市', value: [115.970463, 23.373230]},
      {name: '云浮市', value: [111.746914, 22.934758]}
    ],
    mapboxMap: null
  }),
  computed: {
    layerData () {
      return gdData
    }
  },
  methods: {
    initReady ({mapboxMap}) {
      this.mapboxMap = mapboxMap
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
