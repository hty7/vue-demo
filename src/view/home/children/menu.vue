<template>
  <v-navigation-drawer clipped fixed v-model="drawer" app>
    <v-list dense>
      <template v-for="(item, index) in routers">
        <v-list-group no-action :key="index" v-if="item.items">
          <v-list-tile slot="activator" :href="item.path" :to="{path: item.path}" >
            <v-list-tile-action>
              <v-icon light :color="item.color" v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.items" :key="subItem.title" :href="subItem.path" :to="{path: subItem.path}">
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon light :color="subItem.color" v-html="subItem.icon"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-tile :href="item.path" :to="{path: item.path}" :key="index" v-else>
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
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    routers: [
      {path: 'location', router: true, title: '列表', icon: 'transfer_within_a_station', color: 'blue'},
      {title: '公告', icon: 'record_voice_over', color: 'orange', items: [{title: '新建公告', path: 'announcement', router: true}, {title: '公告列表', path: 'announList'}]},
      {path: 'analysis', router: true, title: '数据分析', icon: 'backup', color: 'indigo'},
      {path: 'setting', router: true, title: '设置', icon: 'settings', color: 'purple'}
    ]
  }),
  methods: {
  }
}
</script>
