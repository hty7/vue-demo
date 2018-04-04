<template>
  <v-app  style="text-align: left;">
    <v-layout row>
      <v-flex xs6 sm4 offset-sm4>
        <v-card>
          <v-card-media src="/static/images/login_bg.jpg" height="220px"></v-card-media>
          <v-card-title  primary-title>
            <div class="headline">VUETIFY</div>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field label="Name" v-model="params.name" :rules="nameRules" :counter="10" required></v-text-field>
              <v-text-field label="Password" v-model="params.pw" :counter="6" required></v-text-field>
              <v-btn flat @click.native="show = !show">服务条款</v-btn>
            </v-form>
          </v-card-text>
          <v-slide-y-transition>
            <v-card-text v-show="show">
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-slide-y-transition>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn round color="primary" dark @click.native="login">{{$t('buttom.login')}}</v-btn>
            <v-btn flat round color="primary">{{$t('buttom.registered')}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data: () => ({
    valid: false,
    show: false,
    params: {
      name: '',
      pw: '',
      isAgress: false
    },
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ]
  }),
  computed: {
  },
  methods: {
    ...mapActions(['getCurrentUser']),
    async login () {
      try {
        await this.getCurrentUser()
        this.$router.push({path: '/'})
        this.$toast('登陆成功')
      } catch (err) {
        this.$router.push({path: '/'})
        this.$toast(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
