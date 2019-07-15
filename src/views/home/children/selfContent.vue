<template>
  <div>
    <div ref="chartDom" class="panel-header"></div>
    <v-container fluid grid-list-lg style="margin-top: -60px;">
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 lg3>
          <!-- style="background: linear-gradient(to right, #73a996, #5a796d);" -->
          <div class="module module-hover">
            <img src="@/assets/images/circle.svg" class="card-img-absolute" alt="circle-image">
            <div class="module-box">
              <div class="module-box-img">
                <v-icon size="42" color="#73a996">
                  android
                </v-icon>
              </div>
              <div class="module-box-content">
                <span class="name">智慧</span>
                <p class="num">
                  <span class="box-title">总额 </span>100 | <span class="box-title">余额 </span>5
                </p>
              </div>
            </div>
            <div class="module-footer">
              <p>
                <v-icon small color="white">
                  commute
                </v-icon> 有效地市：广州市/天河区
              </p>
              <p>
                <v-icon small color="white">
                  av_timer
                </v-icon> 有效期至：2018/02/10
              </p>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md3 lg3>
          <!-- style="background: linear-gradient(to right, #75bef9, #047edf);" -->
          <div class="module module-hover">
            <img src="@/assets/images/circle.svg" class="card-img-absolute" alt="circle-image">
            <div class="module-box">
              <div class="module-box-img">
                <v-icon size="42" color="#75bef9">
                  pie_chart
                </v-icon>
              </div>
              <div class="module-box-content">
                <span class="name">模块评估</span>
                <div class="num">
                  <span class="box-title">总额 </span>100 | <span class="box-title">余额 </span>80
                </div>
              </div>
            </div>
            <div class="module-footer">
              <p>
                <v-icon small color="white">
                  commute
                </v-icon> 有效地市：广州市/天河区
              </p>
              <p>
                <v-icon small color="white">
                  av_timer
                </v-icon> 有效期至：2018/12/30
              </p>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md3 lg3>
          <!-- style="background: linear-gradient(to right, #159bab, #009880);" -->
          <div class="module module-hover">
            <img src="@/assets/images/circle.svg" class="card-img-absolute" alt="circle-image">
            <div class="module-box">
              <div class="module-box-img">
                <v-icon size="42" color="#159bab">
                  burst_mode
                </v-icon>
              </div>
              <div class="module-box-content">
                <span class="name">相册组</span>
                <div class="num">
                  <span class="box-title">总额 </span>100 | <span class="box-title">余额 </span>0
                </div>
              </div>
            </div>
            <div class="module-footer">
              <p>
                <v-icon small color="white">
                  commute
                </v-icon> 有效地市：广州市/天河区
              </p>
              <p>
                <v-icon small color="white">
                  av_timer
                </v-icon> 有效期至：2018/12/30
              </p>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md3 lg3>
          <!-- style="background: linear-gradient(to right, #f3ac7e, #fe7096);" -->
          <div class="module module-hover">
            <img src="@/assets/images/circle.svg" class="card-img-absolute" alt="circle-image">
            <div class="module-box">
              <div class="module-box-img">
                <v-icon size="42" color="#f3ac7e">
                  timeline
                </v-icon>
              </div>
              <div class="module-box-content">
                <span class="name">流量分析</span>
                <div class="num">
                  <span class="box-title">总额 </span>100 | <span class="box-title">余额 </span>8
                </div>
              </div>
            </div>
            <div class="module-footer">
              <p>
                <v-icon small color="white">
                  commute
                </v-icon>
                有效地市：广州市/天河区
              </p>
              <p>
                <v-icon small color="white">
                  av_timer
                </v-icon>
                有效期至：2018/12/30
              </p>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12>
          <div class="module">
            <p>Active Users</p>
            <h3 style="font-size: 35px;">
              37563 online
            </h3>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  components: {
  },
  data: () => ({
    chart1: null,
    echartData: null
  }),

  mounted () {
    this.$nextTick(() => {
      this.drawChart()
    })
    window.addEventListener('resize', this.resizeFu, false)
  },
  beforeRouteLeave (to, from, next) {
    window.removeEventListener('resize', this.resizeFu, false)
    next()
  },
  methods: {
    drawChart () {
      this.chart1 = echarts.init(this.$refs.chartDom)
      this.echartData = {
        axis: {data: [20180701, 20180702, 20180703, 20180704, 20180705, 20180706, 20180707, 20180708, 20180709, 20180710, 20180711, 20180712, 20180713, 20180714, 20180715, 20180716, 20180717, 20180718, 20180719, 20180720, 20180721, 20180722, 20180723, 20180724, 20180725, 20180726, 20180727, 20180728, 20180729, 20180730]},
        itemData: [
          {name: '总次数', data: [100, 1, 1050, 120, 1000, 900, 98, 1200, 110, 1090, 1000, 1020, 10, 1200, 1000, 900, 980, 1200, 1100, 1090, 1000, 1020, 1050, 1200, 1000, 9, 980, 1200, 1100, 1090]}
        ]
      }
      let axisData = this.echartData.axis.data
      this.chart1.setOption({
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          bottom: 50,
          right: '5%',
          top: 50
        },
        toolbox: {
          show: false
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: axisData,
          axisLabel: {
            margin: 20,
            color: 'rgba(255, 255, 255, 0.3)'
          },
          axisTick: {
            show: true,
            length: 12,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            margin: 20,
            color: 'rgba(255, 255, 255, 0.2)'
          },
          axisLine: { show: false },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.05)'
            }
          }
        },
        series: [
          {
            name: '总次数',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 9,
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#fff'
              }
            },
            itemStyle: {
              color: '#047edf',
              borderColor: 'rgba(255, 255, 255, 0.6)',
              borderWidth: 2,
            },
            lineStyle: {
              normal: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(82, 191, 255, 0.6)'
                }, {
                  offset: 0.4,
                  color: 'rgba(82, 191, 255, 0.3)'
                }, {
                  offset: 0.9,
                  color: 'rgba(82, 191, 255, 0)'
                }], false),
                shadowColor: 'rgba(228, 139, 76, 0.3)',
                shadowBlur: 20
              }
            },
            data: [600, 753, 1050, 1020, 1000, 900, 998, 1230, 710, 1090, 1000, 1020, 790, 1200, 1000, 900, 980, 1200, 1100, 1090, 1000, 1020, 1050, 1200, 1000, 99, 980, 1200, 1100, 1090]
          }
        ]
      })
    },
    resizeFu () {
      // 重绘，防抖500ms延迟
      this.debounceTdentify && clearTimeout(this.debounceTdentify)
      this.debounceTdentify = setTimeout(() => {
        this.chart1.resize()
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-header {
  background: linear-gradient(148deg, #0a1c31 0, #0672a9 70%, #248c99 100%);
  width: 100%;
  height: 520px;
  padding-top: 58px;
  padding-bottom: 58px;
}
.module-hover {
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1px 4px 1px rgba(39, 39, 39, 0.2);
  }
  .card-img-absolute {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    transition: all .8s;
  }
}
.module {
  position: relative;
  transition: all .8s;
  background: #fff;
  padding: 10px;
  color: #464646;
  box-shadow: 0 3px 15px 1px rgba(39, 39, 39, 0.1);
  border-radius: 5px;
  &-box {
    display: flex;
    width: 100%;
    height: 100%;
    &-img {
      flex: 0 0 60px;
      text-align: center;
    }
    &-content {
      flex: 1;
      .name {
        font-size: 14px;
        font-weight: bold;
      }
      .box-title {
        font-size: 12px;
        opacity: .95;
        font-weight: bold;
      }
      .num {
        font-size: 24px;
        cursor: pointer;
        margin-bottom: 0;
      }
    }
  }
  &-footer {
    border-top: 1px rgba(224, 224, 224, .8) solid;
    margin-top: 10px;
    padding: 10px;
    opacity: .75;
  }
  &-card {
    height: 420px;
    color: #373d44;
    .avatar {
      padding: 20px;
      text-align: center;
      p {
        font-size: 18px;
        font-weight: bold;
        padding-top: 10px;
      }
    }
    .message {
      padding: 10px;
      font-size: 13px;
      &-item {
        padding: 10px 0;
        border-bottom: 1px #e6e6e6 solid;
        &:first-child {
          border-top: 1px #e6e6e6 solid;
        }
        &-title {
          font-weight: bold;
        }
        &-msg {
          float: right;
        }
      }
    }
  }
}
</style>
