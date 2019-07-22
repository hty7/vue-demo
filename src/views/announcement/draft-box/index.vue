<template>
  <div class="announcement-list">
    <template v-for="(alkey, index) in draftList">
      <div class="announcement-item" :key="alkey.id">
        <div class="announcement-item-header">
          <v-avatar size="36px">
            <img :src="alkey.avatarUrl" alt="头像">
          </v-avatar>
          <span class="name">{{ alkey.fromName }}</span>
          <p class="self-title">
            {{ alkey.title }}
          </p>
          <div class="announcement-tool">
            <v-btn flat icon color="primary">
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn flat icon color="red" @click.stop="confirmDialog = true;activeItem=index">
              <v-icon>delete</v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider light></v-divider>
        <div class="announcement-item-body">
          <span>{{ alkey.conetent }}</span>
        </div>
      </div>
    </template>
    <div v-if="!draftList || !draftList.length" style="text-align: center;">
      暂无数据
    </div>
    <v-dialog v-model="confirmDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">
          提示
        </v-card-title>
        <v-card-text>
          确定要彻底删除该草稿？
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="confirmDialog = !confirmDialog">
            取消
          </v-btn>
          <v-btn flat color="red" @click="delAnnouncements([activeItem])">
            删除
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    draftList: [
      {
        id: 'd802381m1',
        fromName: 'TOM',
        avatarUrl: require(`@/assets/images/avatar/20140524012047988.png`),
        title: 'new announcement1',
        conetent: 'Became a searcher,wanting to find out who I was and what made me unique. My view of myself was changing. I wanted a solid base to start from. I started to resist3 pressure to act in ways that I didn’t like any more,and I was delighted by who I really was. I came to feel much more sure that no one can ever take my place.'
      },
      {
        id: 'd802381m1',
        fromName: 'JANE',
        avatarUrl: require(`@/assets/images/avatar/20160203022630582.png`),
        title: 'new announcement1',
        conetent: `Just as you need air to breathe, you need opportunity to succeed. It takes more than just breathing in the fresh air of opportunity, however. You must make use of that opportunity. That's not up to the opportunity. That's up to you. It doesn't matter what "floor" the opportunity is on. What matters is what you do with it.`
      }
    ],
    activeItem: null,
    confirmDialog: false
  }),
  methods: {
    delAnnouncements (el=[]) {
      if (el.length) {
        el.forEach(e => {
          this.draftList.splice(e,1)
        })
      }
      this.confirmDialog = false
    }
  },
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
    &-header {
      position: relative;
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
      .announcement-tool {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    &-body {
      color: #797979;
      padding: 5px 0;
      span {
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
      }
    }
  }
}
</style>
