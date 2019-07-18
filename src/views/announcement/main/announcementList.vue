<template>
  <div class="announcement-list">
    <template v-for="alkey in 10">
      <div class="announcement-item" :key="alkey">
        <div class="icon-importance">
          <img src="@/assets/images/local_offer.png" alt="" width="20">
        </div>
        <div class="announcement-item-header">
          <v-avatar size="36px">
            <img src="@/assets/images/john.jpg" alt="头像">
          </v-avatar>
          <span class="name">Tom</span>
          <p class="self-title">
            TS because most gotcha edge cases
          </p>
        </div>
        <v-divider light></v-divider>
        <div class="announcement-item-body">
          <span>"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</span>
        </div>
        <v-divider light></v-divider>
        <div class="announcement-item-footer">
          <div class="avatar-list">
            <template v-for="(item, key) in readerList">
              <img :src="require(`@/assets/images/avatar/${item.id}.png`)" :style="{left: 14*key+'px'}" alt="头像" :key="key">
            </template>
          </div>
          <v-layout align-center justify-end>
            <v-icon class="mr-1" color="">
              chat_bubble
            </v-icon>
            <div>12</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <v-icon class="mr-1">
              visibility
            </v-icon>
            <span>256</span>
          </v-layout>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    readerList: [
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
  })
}
</script>

<style lang="scss" scoped>
.announcement-list {
  .announcement-item {
    position: relative;
    margin-bottom: 12px;
    background: #fff;
    padding: 8px 12px;
    border-radius: 5px;
    box-shadow: 0 3px 5px 1px rgba(181, 181, 181, 0.4);
    transition: all .4s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0px 7px 1px rgba(161, 161, 161, 0.8);
      .announcement-item-header {
        font-weight: bolder;
      }
      .announcement-item-body {
        color: #000;
      }
    }
    .icon-importance {
      position: absolute;
      top: 16px;
      right: 16px;
    }
    &-header {
      margin-bottom: 8px;
      .name {
        margin-left: 12px;
        font-size: 14px;
      }
      .self-title {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 0;
        margin-top: 3px;
      }
    }
    &-body {
      color: #797979;
      padding: 5px 0;
    }
    &-footer {
      display: flex;
      padding-top: 8px;
      .avatar-list {
        position: relative;
        width: 160px;
        height: 26px;
        overflow: hidden;
        img {
          position: absolute;
          width: 26px;
          border-radius: 50%;
          border: 2px #fff solid;
          box-shadow: -1px 1px 2px #adadad;
        }
      }
    }
  }
}
</style>

