<template>
  <v-navigation-drawer clipped fixed v-model="controlsOption.drawer" app>
    <template v-for="(item, index) in routers">
      <v-list dense :key="index" v-if="item.path">
        <v-list-tile :href="item.title" :to="{path: item.path}" :key="index">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense :key="index" v-else>
        <v-divider></v-divider>
        <v-subheader>{{item.title}}</v-subheader>
          <template v-for="subItem in item.items">
          <v-list-tile :href="subItem.title" :to="{path: subItem.path}" :key="subItem.title">
            <v-list-tile-action>
              <v-icon light>{{subItem.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{subItem.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <v-divider></v-divider>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data: () => ({
  }),
  computed: {
    ...mapGetters(['controlsOption']),
    routers () {
      return this.$t('routers')
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
