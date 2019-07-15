<template>
  <v-toolbar app fixed dark flat :clipped-left="false" height="52" color="primary" style="background-color:transparent !important">
    <v-toolbar-side-icon @click.stop="drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-badge overlap color="red" style="cursor: pointer">
      <span slot="badge">3</span>
      <v-avatar class="indigo" size="38">
        <img :src="accoutMes.avatar" alt="avatar">
      </v-avatar>
    </v-badge>
    <v-menu :close-on-content-click="false" transition="silde-y-trandition" :nudge-width="200" bottom v-model="menu">
      <template v-slot:activator="{ on }">
        <v-btn flat small v-on="on">
          管理员
        </v-btn>
      </template>
      <v-card>
        <v-expansion-panel>
          <v-expansion-panel-content hide-actions>
            <div slot="header">
              super admin
            </div>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar @click="editAvatarShow = true" style="cursor: pointer">
              <img :src="accoutMes.avatar" alt="avatar">
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
          <v-list-tile @click="editAvatarShow = true">
            <v-list-tile-action>
              <v-icon color="teal">
                edit
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-sub-title>修改头像</v-list-tile-sub-title>
            </v-list-tile-content>
            <edit-avatar :dialogShow="editAvatarShow" @saveUserAvatar="saveUserAvatar" @close="editAvatarShow=false"></edit-avatar>
          </v-list-tile>
          <!-- <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>
              主题 ({ {hints?'白色' : '黑说' }})
            </v-list-tile-title>
          </v-list-tile> -->
          <!-- <v-list-tile>
            语言：
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
          </v-list-tile> -->
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="menu = false">
            取消
          </v-btn>
          <v-btn color="primary" flat @click="signOut">
            注销
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-toolbar>
</template>

<script>
import {mapGetters} from 'vuex'
import EditAvatar from '@/components/editAvatar'
export default {
  components: {
    EditAvatar
  },
  data: () => ({
    icon: 'zh',
    accoutMes: {
      userName: 'John YJ',
      roleName: '超级管理员',
      avatar: require('../../../assets/images/john.jpg')
    },
    fav: true,
    editAvatarShow: false,
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
      let defaultLang = 'zh'
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
    saveUserAvatar (el) {
      this.accoutMes.avatar = 'static/images/avatar/' + el + '.png'
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
