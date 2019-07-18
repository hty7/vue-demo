<script>
export default {
  name: 'EchartScatter3d',
  render () {
    return ''
  },
  data: () => ({
    series: [
      {
        name: '人口对标',
        type: 'scatter3D',
        coordinateSystem: 'mapbox',
        silent: true,
        symbol: 'circle',
        symbolSize: val => {
          let a = (60 - 20) / 100
          let b = 20 - a * 0
          b = 60 - a * 100
          return a * val[2] + b
        },
        itemStyle: {
          borderWidth: 1,
          borderColor: '#fff'
        },
        data: []
      },
      {
        name: '底线',
        type: 'bar3D',
        coordinateSystem: 'mapbox',
        silent: true,
        barSize: 0.1, // 柱子粗细
        itemStyle: {
          color: '#00c5ac'
        },
        data: []
      }
    ]
  }),
  props: {
    barData: {
      type: Array,
      default: null
    }
  },
  watch: {
    barData: {
      handler () {
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
        let scatter3dData = this.setBarData(this.barData)
        this.series[0].data = scatter3dData
        this.series[1].data = scatter3dData
        mapboxOption.series = this.series
      })
    },
    setBarData (data) {
      return data.map((item) => {
        return {name: item.name, value: item.value.concat(100 * Math.random())}
      })
    }
  }
}
</script>
