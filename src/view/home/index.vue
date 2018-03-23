<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge overlap color="red">
        <span slot="badge">3</span>
        <v-avatar class="indigo">
          <v-icon dark>account_circle</v-icon>
        </v-avatar>
      </v-badge>
      <v-btn flat small>ADMIN</v-btn>
    </v-toolbar>
    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-list dense>
        <template v-for="(item, index) in routers">
          <v-list-tile :href="item.path" :to="{path: item.path}" :key="index">
            <v-list-tile-action>
              <v-icon light :color="item.color" v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    routers: [
      {path: 'location', router: true, title: '列表', icon: 'transfer_within_a_station', color: 'blue'},
      {path: 'setting', router: true, title: '设置', icon: 'settings', color: 'orange'}
    ]
  }),
  methods: {
    dosome () {
      this.$toast('this is tip')
    }
  }
}
</script>
