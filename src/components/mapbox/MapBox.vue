<template>
  <div style="height:100%;width:100%;text-align:left;">
    <div ref="basicMapbox" :style="mapSize">
      <slot/>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import mapboxgl from 'mapbox-gl'
import 'echarts-gl'
export default {
  props: {
    mapWidth: {
      type: String
    },
    mapHeight: {
      type: String
    }
  },
  data () {
    return {
      chart: null,
      options: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化
    init () {
      mapboxgl.accessToken = 'pk.eyJ1IjoieWFuZ2ppYW4iLCJhIjoiY2phaG1neno0MXFkNDMzbWhwNWw0bWM4aiJ9.CFmrh0LVWAbmVeed-Xr7wA'
      this.chart = echarts.init(this.$refs.basicMapbox)
      this.options = {
        visualMap: [{
          show: false,
          min: 0,
          max: 100,
          seriesIndex: 0,
          calculable: true,
          inRange: {
            color: ['#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          }
        }],
        mapbox: {
          center: [113.206456, 23.072519],
          zoom: 6.2,
          pitch: 60,
          bearing: 0,
          style: 'mapbox://styles/mapbox/satellite-v9',
          boxHeight: 20,
          light: {
            main: {
              intensity: 1,
              shadow: true,
              shadowQuality: 'high'
            },
            ambient: {
              intensity: 0.2
            }
          }
        },
        series: []
      }
      global.mapboxgl = mapboxgl
      global.mapboxChart = this.chart
      global.mapboxOption = this.options
    }
  },
  computed: {
    mapSize () {
      let styleObj = {
        width: this.mapWidth,
        height: this.mapHeight
      }
      return styleObj
    }
  }
}
</script>
<style>
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css');
</style>
