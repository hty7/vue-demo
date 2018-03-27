<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-badge overlap color="red">
      <span slot="badge">3</span>
      <v-avatar class="indigo">
        <img src="/static/images/john.jpg" alt="John">
      </v-avatar>
    </v-badge>
    <v-menu :close-on-content-click="false" :nudge-width="200" v-model="menu">
      <v-btn flat small slot="activator">ADMIN</v-btn>
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
              <v-btn icon :class="fav ? 'red--text' : ''" @click="fav = !fav">
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
            <v-list-tile-title>接受推送</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>切换皮肤 ({{hints?'黑暗森林':'象牙白'}})</v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="menu = false">取消</v-btn>
          <v-btn color="primary" flat @click="signOut">退出登陆</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: true,
    hints: false
  }),
  watch: {
    hints () {
      this.$emit('toggerThemes')
    }
  },
  methods: {
    drawer () {
      console.log('iii')
      this.$emit('toggerDrawer')
    },
    signOut () {
      this.menu = false
      this.$router.push({path: '/login'})
      this.$toast('退出登陆成功')
    }
  }
}
</script>
