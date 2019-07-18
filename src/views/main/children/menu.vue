<template>
  <v-navigation-drawer :clipped="false" fixed v-model="controlsOption.drawer" overflow app>
    <template v-for="(item, index) in routers">
      <v-list dense :key="index" v-if="item.path">
        <v-list-tile :href="item.title" :to="{path: item.path}" :key="index">
          <v-list-tile-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense :key="index" v-else>
        <v-divider></v-divider>
        <v-subheader>
          {{ item.title }}
        </v-subheader>
        <template v-for="subItem in item.items">
          <v-list-tile :href="subItem.title" :to="{path: subItem.path}" :key="subItem.title">
            <v-list-tile-action>
              <v-icon light>
                {{ subItem.icon }}
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ subItem.title }}
              </v-list-tile-title>
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
    routers: [
      {path: 'home', router: true, title: '首页', icon: 'home', color: 'blue'},
      {
        title: '公告',
        icon: 'record_voice_over',
        color: 'orange',
        items: [
          {path: 'announcement', router: true, title: '公告', icon: 'chat_bubble', color: 'blue'}
        ]
      },
      {
        title: '数据分析',
        icon: 'backup',
        color: 'indigo',
        items: [
          {path: 'trafficAnalysis', router: true, title: '流量分析', icon: 'equalizer', color: 'indigo'},
          {path: 'flowAnalysis', router: true, title: '流动分析', icon: 'timeline', color: 'indigo'},
          {path: 'baiduMap', router: true, title: '百度地图', icon: 'satellite', color: 'indigo'},
          {path: 'mapbox', router: true, title: 'MapBox', icon: 'map', color: 'indigo'},
          {path: 'mapbox2', router: true, title: 'MapBox2', icon: 'map', color: 'indigo'},
          {path: 'arcGIS', router: true, title: 'arcGIS', icon: 'nature_people', color: 'indigo'}
        ]
      },
      {path: 'threeJS', router: true, title: '3D模型', icon: 'wifi_tethering', color: 'green'},
      {
        title: '资源管理',
        icon: 'folder',
        color: 'indigo',
        items: [
          {path: 'resource', router: true, title: '图片流', icon: 'subscriptions', color: 'green'},
          {path: 'storage', router: true, title: 'indexedDB', icon: 'storage', color: 'green'}
        ]
      },
      {
        title: '设置',
        icon: 'settings',
        color: 'purple',
        items: [
          {path: 'setting', router: true, title: '用户管理', icon: 'folder_shared', color: 'purple'},
          {path: 'setting', router: true, title: '角色管理', icon: 'supervised_user_circle', color: 'purple'},
          {path: 'setting', router: true, title: '权限管理', icon: 'security', color: 'purple'},
          {path: 'setting', router: true, title: '设置', icon: 'settings', color: 'purple'}
        ]
      }
    ]
  }),
  computed: {
    ...mapGetters(['controlsOption'])
  },
  created () {
  },
  methods: {
  }
}
</script>
