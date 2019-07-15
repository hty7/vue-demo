<template>
  <div class="announcement-content">
    <div class="announcement-content-header">
      <div class="announcement-base">
        <p>发告人：TOM</p>
        <p>收件人：john、chin、harn dsgn、my deer、sss</p>
        <p>日期：2019/07/01 12:13:24</p>
      </div>
      <h2 class="self-title">
        Each of us holds a unique place in the world
      </h2>
    </div>
    <div class="announcement-content-body">
      <p>
        Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.
      </p>
      <p>
        Became a searcher,wanting to find out who I was and what made me unique. My view of myself was changing. I wanted a solid base to start from. I started to resist3 pressure to act in ways that I didn’t like any more,and I was delighted by who I really was. I came to feel much more sure that no one can ever take my place.
      </p>
      <p>
        Each of us holds a unique place in the world. You are special,no matter what others say or what you may think. So forget about being replaced. You can’t be.
      </p>
      <p>
        Just as you need air to breathe, you need opportunity to succeed. It takes more than just breathing in the fresh air of opportunity, however. You must make use of that opportunity. That's not up to the opportunity. That's up to you. It doesn't matter what "floor" the opportunity is on. What matters is what you do with it.
      </p>
      <div class="announcement-tools">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn flat icon small color="primary" v-on="on">
              <v-icon small>
                chat_bubble
              </v-icon>
            </v-btn>
          </template>
          <span>评论</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn flat icon small color="pink" v-on="on">
              <v-icon small>
                favorite
              </v-icon>
            </v-btn>
          </template>
          <span>收藏</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn flat icon small color="deep-orange" v-on="on">
              <v-icon small>
                thumb_up
              </v-icon>
            </v-btn>
          </template>
          <span>点赞</span>
        </v-tooltip>
      </div>
    </div>
    <div class="announcement-content-footer">
      <div class="review">
        <div v-for="(item, key) in reviewList" :key="key" class="review-list">
          <img :src="require(`@/assets/images/avatar/${ item.id }.png`)" alt="头像">
          <div class="review-list-content">
            <span>{{ item.name }}</span>
            <p>{{ item.message }}</p>
          </div>
        </div>
      </div>
      <div class="annex">
        <p>附件</p>
        <a>237572483758273237asdsd.pdf</a><br>
        <a>237572483758273237asdsd.txt</a>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data: () => ({
    reviewList: [
      {
        name: 'Tom',
        id: '20140524012047988',
        message: 'good job!!',
        children: [
          {name: 'YJ', id: '20180508023726670', message: 'good'},
          {name: 'YJohn', id: '20180508023737293', message: 'good'}
        ]
      },
      {name: 'John', id: '20160203022630582', message: 'Just as you need air to breathe, you need opportunity to succeed!!'},
      {name: 'Jane', id: '20180508023717543', message: 'hello'}
    ]
  })
}
</script>

<style lang="scss" scoped>
.announcement-content {
  background: #fff;
  margin-left: 12px;
  padding: 24px;
  border-radius: 5px;
  &-header {
    .announcement-base {
      color: #fff;
      background: #0169a5;
      padding: 8px 16px;
      margin-bottom: 30px;
      font-weight: bold;
      p {
        margin: 5px 0;
      }
    }
    .self-title {
      font-size: 16px;
      text-align: center;
    }
  }
  &-body {
    margin-top: 30px;
    p {
      text-indent: 26px;
    }
    .announcement-tools {
      text-align: right;
    }
  }
  &-footer {
    .review {
      border-top: 1px #eee solid;
      border-bottom: 1px #eee solid;
      padding: 12px 0;
      .review-list {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        img {
          flex: 0 0 26px;
          display: inline-block;
          width: 26px;
          height: 26px;
        }
        .review-list-content {
          flex: 1;
          margin-left: 6px;
          p {
            color: #bfbfbf;
            margin-bottom:  0;
          }
        }
      }
    }
  }
}
</style>

