<template>
  <div class="announcement-header">
    <div :class="['conf-wrapper', activeIndex === 1 ? 'active' : '']" @click="showTab('Main', 1)">
      <img src="@/assets/images/announcement/icon-comments.png" alt="">
      <p>公告箱</p>
    </div>
    <div :class="['conf-wrapper', activeIndex === 2 ? 'active' : '']" @click="showTab('DraftBox', 2)">
      <img src="@/assets/images/announcement/icon-folder.png" alt="">
      <p>草稿箱</p>
    </div>
    <div :class="['conf-wrapper', activeIndex === 3 ? 'active' : '']" @click="showTab('Edit', 3)">
      <img src="@/assets/images/announcement/icon-edit.png" alt="">
      <p>新增公告</p>
    </div>
    <div :class="['conf-wrapper', activeIndex === 4 ? 'active' : '']">
      <img src="@/assets/images/announcement/icon-search.png" alt="">
      <p>公告搜索</p>
    </div>
    <div :class="['conf-wrapper', activeIndex === 5 ? 'active' : '']">
      <img src="@/assets/images/announcement/icon-services.png" alt="">
      <p>规则设置</p>
    </div>
    <div :class="['conf-wrapper', activeIndex === 6 ? 'active' : '']">
      <img src="@/assets/images/announcement/icon-trash-can.png" alt="">
      <p>回收箱</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeIndex: 1
  }),
  methods: {
    showTab (el, index) {
      this.activeIndex = index
      this.$emit('showTab', el)
    }
  },
}
</script>

<style lang="scss" scoped>
.announcement-header {
  height: 152px;
  width: 100%;
  overflow-x: auto;
  padding-top: 58px;
  background: linear-gradient(148deg, #0a1c31 0, #0672a9 70%, #248c99 100%);
  .conf-wrapper {
    text-align: center;
    height: 94px;
    width: 94px;
    display: inline-block;
    margin-right: 16px;
    transition: all .8s;
    cursor: pointer;
    img {
      width: 64px;
      height: auto;
      padding: 8px;
      border-radius: 50%;
      transition: all .5s;
      background: rgba(2, 56, 95, 0.6);
    }
    p {
      position: relative;
      color: #ccc;
      font-weight: bold;
      margin-bottom: 0;
      transition: all .5s;
    }
    &:not(.active):hover {
      transform: translateY(-8px);
      img {
        box-shadow: 0 2px 4px 1px rgba(39, 39, 39, 0.74);
      }
      p {
        color: #fff;
      }
    }
  }
  .active {
    p {
      &::before {
        content: '';
        display: inline-block;
        margin-right: 5px;
        width: 5px;
        height: 10px;
        background: #40b0ff;
      }
    }
  }
}
</style>

