<template>
  <v-layout>
    <v-flex xs6 sm6>
      <div ref="chart1" style="width: 100%;height: 600px;"></div>
    </v-flex>
    <v-flex xs6 sm6>
      <div ref="chart2" style="width: 100%;height: 300px;"></div>
      <div ref="chart3" style="width: 100%;height: 300px;"></div>
    </v-flex>
  </v-layout>
</template>

<script>
import echarts from 'echarts'
export default {
  components: {
  },
  data: () => ({
    chart1: null,
    chart2: null,
    debounceTdentify: 0
  }),
  computed: {
  },
  mounted () {
    this.$nextTick(() => {
      this.drawChart1()
      this.drawChart2()
      this.drawChart3()
    })
    window.addEventListener('resize', this.resizeFu, false)
  },
  beforeRouteLeave (to, from, next) {
    window.removeEventListener('resize', this.resizeFu, false)
    next()
  },
  methods: {
    drawChart1 () {
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
    },
    drawChart2 () {
      this.chart2 = echarts.init(this.$refs.chart2, 'vintage')
      this.chart2.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['最高气温', '最低气温']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        },
        series: [{
          name: '最高气温',
          type: 'line',
          data: [11, 11, 15, 13, 12, 13, 10],
          markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        }, {
          name: '最低气温',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [
              {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'},
              [{
                symbol: 'none',
                x: '90%',
                yAxis: 'max'
              }, {
                symbol: 'circle',
                label: {
                  normal: {
                    position: 'start',
                    formatter: '最大值'
                  }
                },
                type: 'max',
                name: '最高点'
              }]
            ]
          }
        }]
      })
    },
    drawChart3 () {
      this.chart3 = echarts.init(this.$refs.chart3, 'vintage')
      let option3 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'value',
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: ['top1', 'top2', 'top3', 'top4', 'top5']
        },
        series: [{
          name: 'testsonf',
          type: 'bar',
          data: [
            {name: 'app1', value: 34},
            {name: 'app2', value: 46},
            {name: 'app3', value: 6},
            {name: 'app4', value: 74},
            {name: 'app5', value: 64}
          ]
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 15
        }
      }
      this.chart3.setOption(option3)
    },
    resizeFu (el) {
      // 重绘，防抖500ms延迟
      this.debounceTdentify && clearTimeout(this.debounceTdentify)
      this.debounceTdentify = setTimeout(() => {
        this.chart1.resize()
        this.chart2.resize()
        this.chart3.resize()
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
