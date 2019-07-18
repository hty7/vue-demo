<template>
  <div style="height:100%;width:100%">
    <div ref="basicMap" :style="mapSize"></div>
  </div>
</template>
<script>
export default {
  props: {
    ak: {
      type: String,
      default: 'imCMLRYgkIlk1ul0lGMDGkoj5Yw8eIk0'
    },
    mapWidth: {
      type: String,
      default: '100%'
    },
    mapHeight: {
      type: String,
      default: '100%'
    },
    center: {
      type: Array,
      default: null
    },
    zoom: {
      type: Number,
      default: 18
    },
    navigationOffset: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    this.reset()
  },
  methods: {
    // 初始化
    reset () {
      const {getMapScript, initMap} = this
      getMapScript().then(initMap)
    },
    // 获取baidumap
    getMapScript () {
      if (!global.BMap) {
        const ak = this.ak || this._BMap().ak
        global.BMap = {}
        global.BMap._preloader = new Promise((resolve) => {
          global._initBaiduMap = function () {
            resolve(global.BMap)
            global.document.body.removeChild($script)
            global.BMap._preloader = null
            global._initBaiduMap = null
          }
          const $script = document.createElement('script')
          global.document.body.appendChild($script)
          $script.src = `https://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=_initBaiduMap`
        })
        return global.BMap._preloader
      } else if (!global.BMap._preloader) {
        return Promise.resolve(global.BMap)
      } else {
        return global.BMap._preloader
      }
    },
    // 获取BMap, 初始化地图
    initMap (BMap) {
      this.BMap = BMap
      this.init(BMap)
    },
    init (BMap) {
      let $el = this.$refs.basicMap
      const map = new BMap.Map($el)
      this.map = map
      this.setMapOptions()
      this.$emit('ready', {BMap, map})
    },
    // 设置地图配置
    setMapOptions () {
    }
  },
  computed: {
    mapSize () {
      let styleObj = {
        width: this.mapWidth,
        height: this.mapHeight
      }
      return styleObj
    },
    initZoom () {
      return this.zoom ? this.zoom : 18
    },
    initCenter () {
      return this.center ? this.center : '广州'
    }
  }
}
</script>
<style>
  .anchorBL {
    display:none;
  }
</style>
