<template>
  <v-toolbar app fixed dark clipped-left height="52" color="primary">
    <v-toolbar-side-icon @click.stop="drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-badge overlap color="red">
      <span slot="badge">3</span>
      <v-avatar class="indigo" size="38">
        <img src="/static/images/john.jpg" alt="John">
      </v-avatar>
    </v-badge>
    <v-menu :close-on-content-click="false" :nudge-width="200" v-model="menu">
      <v-btn flat small slot="activator">{{$t('optionMessage.admin')}}</v-btn>
      <v-card>
        <v-expansion-panel>
          <v-expansion-panel-content hide-actions>
            <div slot="header">super admin</div>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="/static/images/john.jpg" alt="John">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John YJ</v-list-tile-title>
              <v-list-tile-sub-title>Front-end development engineer</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon :class="fav ? 'red--text' : ''" @click="setLove">
                <v-icon>favorite</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>{{$t('optionMessage.pushButton')}}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>{{$t('optionMessage.hints')}} ({{hints?$t('optionMessage.skin1'):$t('optionMessage.skin2')}})</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            {{$t('optionMessage.lang')}}：
            <v-btn-toggle v-model="icon">
              <v-btn flat value="zh">
                <span>中文</span>
                <v-icon>format_align_left</v-icon>
              </v-btn>
              <v-btn flat value="en">
                <span>English</span>
                <v-icon>
                  format_color_text
                </v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-list-tile>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="menu = false">{{$t('buttom.cancel')}}</v-btn>
          <v-btn color="primary" flat @click="signOut">{{$t('buttom.signOut')}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-toolbar>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data: () => ({
    icon: 'zh',
    fav: true,
    menu: false,
    message: true,
    hints: false
  }),
  watch: {
    hints (val) {
      this.$store.commit('SET_CONTROLSOPTION', {hints: val})
    },
    icon (val) {
      this.$i18n.locale = val
      this.setLocalStorage('I18N_LANG', val)
    }
  },
  created () {
    let lang = this.getLocalStorage('I18N_LANG')
    if (lang) {
      this.icon = lang
    } else {
      let defaultLang = this.getNavigatorLang()
      this.setLocalStorage('I18N_LANG', defaultLang)
      this.icon = defaultLang
    }
  },
  computed: {
    ...mapGetters(['controlsOption'])
  },
  methods: {
    drawer () {
      this.$store.commit('SET_CONTROLSOPTION', {drawer: !this.controlsOption.drawer})
    },
    setLove () {
      this.fav = !this.fav
      if (this.fav) {
        this.setLocalStorage('user', {name: 'YJ', tel: '110'})
      } else {
        this.removeLocalStorage('user')
      }
    },
    signOut () {
      this.menu = false
      this.$router.push({path: '/login'})
      this.$toast('退出登陆成功')
    }
  }
}
</script>
