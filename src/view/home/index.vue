<template>
  <v-app id="inspire" :dark="hints">
    <Vheader @toggerThemes="hints = !hints" @toggerDrawer="drawer = !drawer"></Vheader>
    <Vmenu :drawer="drawer"></Vmenu>
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
import Vheader from './children/header'
import Vmenu from './children/menu'
export default {
  components: {
    Vheader, Vmenu
  },
  data: () => ({
    hints: false,
    drawer: true
  }),
  methods: {
  }
}
</script>
