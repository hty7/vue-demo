<template>
  <v-layout>
    <v-flex xs6 sm6>
      <div ref="chart1" style="width: 100%;height: 300px;">11 </div>
    </v-flex>
    <v-flex xs6 sm6>
      ccc
    </v-flex>
  </v-layout>
</template>

<script>
import echarts from 'echarts'
export default {
  components: {
  },
  data: () => ({
    chart1: null
  }),
  computed: {
  },
  mounted () {
    this.$nextTick(() => {
      this.drawChart()
    })
  },
  methods: {
    drawChart () {
      this.chart1 = echarts.init(this.$refs.chart1, 'vintage')
      var xAxisData = []
      var data1 = []
      var data2 = []
      for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }
      this.chart1.setOption({
        legend: {
          data: ['bar', 'bar2']
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {},
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
