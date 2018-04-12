<script>
export default {
  name: 'mapbox-control',
  render () {
    return ''
  },
  data: () => ({
    nav: null
  }),
  props: {
    barData: {
      type: Array
    }
  },
  mounted () {
    this.reload()
  },
  methods: {
    reload () {
      this.$nextTick(() => {
        const {mapboxMap, mapboxgl} = global
        if (this.nav) mapboxMap.removeControl(this.nav)
        this.nav = new mapboxgl.NavigationControl()
        mapboxMap.addControl(this.nav)
      })
    }
  }
}
</script>
