<template>
  <v-dialog v-model="dialogShow" max-width="300px" :lazy="true" persistent content-class="pw-box">
    <v-card>
      <v-slide-y-transition>
        <v-card-text class="avator-container">
          <div>
            <div class="avator-container-view">
              <img :src="require('../assets/images/avatar/' + avatarChooose + '.png')" alt="avatar" class="avator-big">
              <div class="avator-btn" @click="saveUserAvatar">
                <p>确认头像</p>
              </div>
            </div>
          </div>
          <div class="avator-container-choose">
            <template v-for="item in avatarList">
              <img :src="require('../assets/images/avatar/' + item.id + '.png')" alt="avatar" :key="item.id" @click="avatarChooose = item.id" class="avator-small">
            </template>
          </div>
          <v-btn color="primary" block small @click.stop="saveUserAvatar">
            确定
          </v-btn>
          <v-btn color="red" block outline small @click.stop="$emit('close')">
            取消
          </v-btn>
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialogShow: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    avatarChooose: '20180508023738286',
    avatarList: [
      {name: '', id: '20140524012047988'},
      {name: '', id: '20160203022630582'},
      {name: '', id: '20180508023717543'},
      {name: '', id: '20180508023725638'},
      {name: '', id: '20180508023726670'},
      {name: '', id: '20180508023737293'},
      {name: '', id: '20180508023737317'},
      {name: '', id: '20180508023737412'},
      {name: '', id: '20180508023738157'},
      {name: '', id: '20180508023738286'}
    ]
  }),
  watch: {
    dialogShow (newVal) {
      if (newVal) {
        let userAvatar = this.getLocalStorage('userAvatar')
        this.avatarChooose = !userAvatar ? '20180508023738286' : userAvatar
      }
    }
  },
  methods: {
    saveUserAvatar () {
      this.setLocalStorage('userAvatar', this.avatarChooose)
      this.$emit('saveUserAvatar', this.avatarChooose)
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.pw-box {
  .avator-view {
    width: 64px;
    height: 64px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    cursor: pointer;
    transition: all 0.6s;
    &-img {
      width: 100%;
    }
    .avator-curtain {
      position: absolute;
      width: 100%;
      height: 100%;
      top: -68px;
      padding-top: 25px;
      color: #313131;
      background: rgba(0, 203, 218, 0.48);
      transition: all 0.6s;
      .iconfont {
        font-size: 37px;
      }
    }
    &:hover .avator-curtain{
      top: 0;
    }
  }
  .avator-container {
    text-align: center;
    .avator-container-choose {
      text-align: left;
    }
    .avator-container-view {
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      border-radius: 50%;
      width: 228px;
      height: 228px;
      .avator-btn {
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 36px;
        color: #000;
        font-weight: bold;
        background: rgba(33, 229, 243, 0.3);
        padding: 8px;
        cursor: pointer;
        transition: all 0.6s;
        &:hover {
          height: 100%;
          font-size: 15px;
          color: #fff;
          padding-top: 120px;
          background: rgba(17, 121, 217, 0.8);
        }
      }
    }
    .avator-small {
      width: 33px;
      cursor: pointer;
      transition: all 0.6s;
      &:hover {
        transform: translateY(-10px);
      }
    }
    .avator-big {
      width: 228px;
    }
  }
}
</style>
