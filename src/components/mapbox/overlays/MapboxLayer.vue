<script>
export default {
  name: 'mapbox-layer',
  render () {
    return ''
  },
  data: () => ({
  }),
  props: {
    layerData: {
      type: String,
      default: ''
    }
  },
  mounted () {
    let gdData = require(`@/utils/${this.layerData}`)
    this.reload(gdData)
  },
  watch: {
    layerData (newData, oldData) {
      let gdData = require(`@/utils/${newData}`)
      this.reload(gdData)
    }
  },
  methods: {
    reload (gdData) {
      this.$nextTick(() => {
        const {mapboxMap} = global
        mapboxMap.on('load', function () {
          mapboxMap.addSource('states', {
            'type': 'geojson',
            'data': gdData
          })
          mapboxMap.addLayer({
            'id': 'state-fills',
            'type': 'fill',
            'source': 'states',
            'layout': {},
            'paint': {
              'fill-color': '#627BC1',
              'fill-opacity': 0.1
            }
          })
          mapboxMap.addLayer({
            'id': 'state-borders',
            'type': 'line',
            'source': 'states',
            'layout': {},
            'paint': {
              'line-color': '#fff',
              'line-width': 2
            }
          })
          mapboxMap.addLayer({
            'id': 'state-fills-hover',
            'type': 'fill',
            'source': 'states',
            'layout': {},
            'paint': {
              'fill-color': 'orange',
              'fill-opacity': 0.3
            },
            'filter': ['==', 'name', '']
          })
        })
      })
    }
  }
}
</script>
