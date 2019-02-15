<template>
  <div>
    <v-btn round color="info" @click="createdb">创建数据库</v-btn>
    <v-btn round color="info" @click="createTable">创建表</v-btn>
    <v-btn round color="info" @click="insertData">插入数据</v-btn>
    <v-btn round color="info" @click="getData">获取数据</v-btn>
  </div>
</template>

<script>
import $db from '@/utils/indexedDB'
export default {
  data: () => ({
  }),

  created () {
  },

  methods: {
    createdb () {
      $db.initDB('mydb', '1.0')
    },
    createTable () {
      let cursorIndex = [
        {name: 'roleName', unique: false},
        {name: 'roleDes', unique: false},
        {name: 'roleStatus', unique: false},
        {name: 'roleToPression', unique: false}
      ]
      $db.createdTable('role', 'id', cursorIndex)
    },
    insertData () {
      let data = { id: 3, userName: '张三', age: 24, email: 'zhangsan@example.com', userPhone: 18819425633 }
      $db.insertDB('user', data)
    },
    async getData () {
      let res = await $db.getdata('user', '张三', 'userName')
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
