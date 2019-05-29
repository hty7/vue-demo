<template>
  <div id="chartMap" ref="chartMap" style="width: 100%;height: calc(100vh - 100px)" v-loading="loading"></div>
</template>

<script>
import * as esriLoader from 'esri-loader'
export default {
  components: {
  },
  data: () => ({
    loading: false
  }),
  computed: {
  },
  created () {
    this.createMap()
  },
  mounted () {
    // if (!esriLoader.isLoaded()) {
    //   esriLoader.loadScript((err) => {
    //     if (err) {
    //       console.log(err)
    //     } else {
    //       this.createMap()
    //     }
    //   }, {
    //     url: 'https://js.arcgis.com/4.6/'
    //   })
    // } else {
    //   this.createMap()
    // }
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  methods: {
    createMap (init) {
      this.loading = false
      esriLoader.loadModules([
        'esri/Map',
        'esri/views/SceneView'
      ]).then(([Map, SceneView]) => {
        this.loading = true
        let map = new Map({
          basemap: 'hybrid',
          ground: 'world-elevation'
        })
        let view = new SceneView({
          map: map,
          container: 'chartMap',
          camera: {
            position: [7.654, 45.919, 9184],
            tilt: 80
          }
        })
        console.log(view)
      }).catch(err => {
        console.log('err', err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://js.arcgis.com/4.6/esri/css/main.css');
</style>
