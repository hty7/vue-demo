<template>
  <v-container fluid grid-list-md style="padding: 0px;">
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 lg3>
        <div class="module module-hover" style="background: linear-gradient(to right, #73a996, #5a796d);">
          <img src="static/images/circle.svg" class="card-img-absolute" alt="circle-image">
          <div class="module-box">
            <div class="module-box-img">
              <v-icon size="42" color="white">android</v-icon>
            </div>
            <div class="module-box-content">
              <span class="name">智慧寻址</span>
              <p class="num">
                <span class="box-title">总额 </span>100 | <span class="box-title">余额 </span>5
              </p>
            </div>
          </div>
          <div class="module-footer">
            <p><v-icon small color="white">commute</v-icon> 有效地市：珠海市/香洲区</p>
            <p><v-icon small color="white">av_timer</v-icon> 有效期：2018/02/10 - 2018/12/30</p>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md3 lg3>
        <div class="module module-hover" style="background: linear-gradient(to right, #75bef9, #047edf);">
          <img src="static/images/circle.svg" class="card-img-absolute" alt="circle-image">
          <div class="module-box">
            <div class="module-box-img">
              <v-icon size="42" color="white">pie_chart</v-icon>
            </div>
            <div class="module-box-content">
              <span class="name">预选址评估</span>
              <div class="num">
                <span class="box-title">总额 </span>100 | <span class="box-title">余额 </span>80
              </div>
            </div>
          </div>
          <div class="module-footer">
            <p><v-icon small color="white">commute</v-icon> 有效地市：珠海市/香洲区</p>
            <p><v-icon small color="white">av_timer</v-icon> 有效期：2018/02/10 - 2018/12/30</p>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md3 lg3>
        <div class="module module-hover" style="background: linear-gradient(to right, #159bab, #009880);">
          <img src="static/images/circle.svg" class="card-img-absolute" alt="circle-image">
          <div class="module-box">
            <div class="module-box-img">
              <v-icon size="42" color="white">burst_mode</v-icon>
            </div>
            <div class="module-box-content">
              <span class="name">参考网点寻址</span>
              <div class="num">
                <span class="box-title">总额 </span>100 | <span class="box-title">余额 </span>100
              </div>
            </div>
          </div>
          <div class="module-footer">
            <p><v-icon small color="white">commute</v-icon> 有效地市：珠海市/香洲区</p>
            <p><v-icon small color="white">av_timer</v-icon> 有效期：2018/02/10 - 2018/12/30</p>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md3 lg3>
        <div class="module module-hover" style="background: linear-gradient(to right, #f3ac7e, #fe7096);">
          <img src="static/images/circle.svg" class="card-img-absolute" alt="circle-image">
          <div class="module-box">
            <div class="module-box-img">
              <v-icon size="42" color="white">timeline</v-icon>
            </div>
            <div class="module-box-content">
              <span class="name">商圈分析</span>
              <div class="num">
                <span class="box-title">总额 </span>100 | <span class="box-title">余额 </span>8
              </div>
            </div>
          </div>
          <div class="module-footer">
            <p><v-icon small color="white">commute</v-icon> 有效地市：珠海市/香洲区</p>
            <p><v-icon small color="white">av_timer</v-icon> 有效期：2018/02/10 - 2018/12/30</p>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 md8 lg8>
        <div class="module">
          <div ref="chartDom" style="width: 100%;height: 420px;"></div>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4>
        <div class="module">
          <div class="module-card">
            <div class="avatar">
              <v-avatar size="68" color="blue lighten-4">
                <v-icon>child_care</v-icon>
              </v-avatar>
              <p>HTY</p>
            </div>
            <div class="message">
              <div class="message-item">
                <span class="message-item-title">邮箱</span>
                <span class="message-item-msg">98833737@163.com</span>
              </div>
              <div class="message-item">
                <span class="message-item-title">联系方式</span>
                <span class="message-item-msg">18393483344</span>
              </div>
              <div class="message-item">
                <span class="message-item-title">注册时间</span>
                <span class="message-item-msg">2018年06月10日</span>
              </div>
              <div class="message-item">
                <span class="message-item-title">账号余额</span>
                <span class="message-item-msg">100,000,000</span>
              </div>
            </div>
            <v-btn block dark round color="info">次数充值</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
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
          right: 30,
          top: 50
        },
        legend: {
          show: false,
          data: ['总次数'],
          itemWidth: 15,
          itemHeight: 15,
          borderRadius: 15
        },
        toolbox: {
          show: false
        },
        xAxis: {type: 'category', boundaryGap: false, data: axisData},
        yAxis: {type: 'value', axisLabel: {formatter: '{value}'}},
        series: [
          {
            type: 'line',
            smooth: true,
            label: {
              normal: {
                show: true,
                position: 'top'
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
            itemStyle: {
              normal: {
                color: 'rgb(82, 191, 255)',
                borderColor: '#e48b4c'
              }
            },
            name: '总次数',
            data: [100, 1, 1050, 120, 1000, 900, 98, 1200, 110, 1090, 1000, 1020, 10, 1200, 1000, 900, 980, 1200, 1100, 1090, 1000, 1020, 1050, 1200, 1000, 9, 980, 1200, 1100, 1090]
          }
        ]
      })
    },
    resizeFu (el) {
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
.module-hover {
  &:hover {
    box-shadow: 1px 1px 3px #242a2f;
    opacity: 0.9;
    .card-img-absolute {
      height: 110%;
    }
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
  background-color: #fff;
  padding: 10px;
  color: #fff;
  box-shadow: 1px 1px 6px #8096ab;
  border-radius: 5px;
  position: relative;
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
        opacity: .75;
      }
      .num {
        font-size: 24px;
        cursor: pointer;
        margin-bottom: 0;
      }
    }
  }
  &-footer {
    border-top: 1px rgba(224, 224, 224, .5) solid;
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
