<script>
export default {
  name: 'echart-bar3d',
  render () {
    return ''
  },
  data: () => ({
    series: {
      name: '常驻人口',
      type: 'bar3D',
      shading: 'realistic',
      coordinateSystem: 'mapbox',
      silent: true,
      barSize: 1, // 柱子粗细
      bevelSize: 0.3,
      emphasis: {
        label: {
          show: false
        }
      },
      label: {
        show: true,
        distance: 0,
        formatter: '{b}',
        textStyle: {
          fontSize: 12
        }
      },
      data: []
    }
  }),
  props: {
    barData: {
      type: Array
    }
  },
  watch: {
    barData: {
      handler (val, oldVal) {
        this.reload()
      },
      deep: true
    }
  },
  created () {
    this.reload()
  },
  methods: {
    reload () {
      this.$nextTick(() => {
        const {mapboxOption} = global
        this.series.data = this.setBarData(this.barData)
        mapboxOption.series = this.series
      })
    },
    setBarData (data) {
      return data.map((item, index) => {
        return {name: item.name, value: item.value.concat(100 * Math.random())}
      })
    }
  }
}
</script>
