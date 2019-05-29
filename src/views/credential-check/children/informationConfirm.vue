<template>
  <div class="dialog">
    <div class="close" @click="$emit('cancel')">
      <img src="@/assets/images/icon-cancel.png" alt="close">
    </div>
    <div class="header-logo">
      <picture>
        <source type="image/webp" srcset="@/assets/images/webp/avatar-round.webp">
        <img src="@/assets/images/avatar-round.png" alt="头像">
      </picture>
    </div>
    <div class="content-box">
      <div class="suggest">
        <p>请确认下列信息准确无误</p>
      </div>
      <v-form>
        <div class="realipt">
          <span>身份证号：</span>
          <input
            type="text"
            v-model="form.cardNumber"
            disabled
          >
        </div>
        <div class="realipt">
          <span>姓名：</span>
          <input 
            type="text"
            v-model="form.name"
            disabled
          >
        </div>
      </v-form>
    </div>
    <div class="footer">
      <v-btn
        round
        color="primary"
        dark
        style="width: 220px;"
        @click="$emit('nextStep')"
      >
        确定
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: {
      cardNumber: '440981197601018888',
      name: '张鑫馨'
    }
  })
}
</script>

<style lang="scss" scoped>
@import '../../../style/minxin';
.dialog {
  position: relative;
  width: 100%;
  padding: .3rem;
  background-color: #fff;
  border-radius: 10px;
  .close {
    position: absolute;
    bottom: -1rem;
    left: calc(50% - 16px);
    img {
      width: 32px;
    }
  }
  .header-logo {
    position: absolute;
    top: -1.5rem;
    left: 0;
    width: 100%;
    text-align: center;
    img {
      width: 3.2rem;
    }
  }
  .content-box {
    margin-top: 1.8rem;
    .suggest {
      font-size: .25rem;
    }
  }
  .realipt {
    position: relative;
    padding: 0 .3rem;
    height: 0.88rem;
    line-height: .86rem;
    text-align: center;
    font-size: .26rem;
    color: #333;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
    span:not(.verify-code) {
      position: absolute;
      left: -0.2rem;
      z-index: 2;
      display: inline-block;
      @include _wh(2rem, .84rem);
      line-height: .84rem;
      text-align: right;
      color: #0085d0;
    }
    input {
      width: 100%;
      font-size: .3rem;
      padding-left: 1.6rem;
    }
  }
  .footer {
    margin-top: .5rem;
    text-align: center;
  }
}
</style>
