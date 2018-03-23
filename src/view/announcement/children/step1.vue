<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media></v-card-media>
        <v-card-title>
          <div>
            <h3 class="headline mb-0">文章发送-公告人</h3>
          </div>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field label="姓名" v-model="params.name" :rules="nameRules" :counter="10" required></v-text-field>
            <v-text-field label="电子邮件" v-model="params.email" :rules="emailRules" required></v-text-field>
            <v-select label="职业" v-model="params.career" :items="items" :rules="[v => !!v || 'Item is required']" required></v-select>
            <v-checkbox label="是否同意?" v-model="checkbox" :rules="[v => !!v || '提交必须点击同意!']" required></v-checkbox>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="blue" @click="submit" :disabled="!valid">提交</v-btn>
          <v-btn icon>
            <v-icon color="red">favorite</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    valid: true,
    params: {
      name: '',
      email: '',
      career: ''
    },
    nameRules: [
      v => !!v || '名称不能为空',
      v => (v && v.length <= 2) || '名称必须大于两个字符'
    ],
    emailRules: [
      v => !!v || '邮箱不能为空',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '邮箱无效'
    ],
    items: [
      '总经理',
      '投资人',
      '科员',
      '业务员'
    ],
    checkbox: false
  }),
  computed: {
  },
  methods: {
    submit () {
      this.$emit('toNext')
    },
    clear () {}
  }
}
</script>

<style lang="scss" scoped>
</style>
