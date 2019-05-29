<template>
  <v-dialog lazy v-model="dialogShow" :persistent="persistent" width="90%" content-class="customize-dialog">
    <div class="dialog">
      <div class="close" @click="cancel">
        <img src="@/assets/images/icon-cancel.png" alt="close">
      </div>
      <div class="header-logo">
        <picture>
          <source type="image/webp" srcset="@/assets/images/webp/avatar-round.webp">
          <img src="@/assets/images/avatar-round.png" alt="头像">
        </picture>
      </div>
      <div class="header">
        <!-- 标题内容 -->
        <slot name="header"></slot>
      </div>
      <div class="content">
        <!-- 正文内容 -->
        <slot name="body"></slot>
      </div>
      <div class="footer">
        <!-- 尾部内容 -->
        <slot name="footer"></slot>
      </div>
    </div>
  </v-dialog>
</template>
<script>
export default {
  props: {
    // 弹窗显示隐藏
    dialog: {
      type: Boolean,
      default: false
    },
    // 点击对话框外部不能使其关闭
    persistent: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    dialogShow: {
      get () {
        return this.dialog
      },
      set (newValue) {
        this.close(newValue)
      }
    }
  },
  methods: {
    close (e) {
      this.$emit('switchDialog', e)
    },
    cancel () {
      this.$emit('switchDialog', false)
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../style/minxin';
.dialog {
  position: relative;
  width: 100%;
  padding: .3rem;
  font-size: .3rem;
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
  .header {
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
