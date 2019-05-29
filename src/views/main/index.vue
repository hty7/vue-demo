<template>
  <v-app id="inspire" :dark="controlsOption.hints">
    <Vmenu></Vmenu>
    <Vheader></Vheader>
    <v-content style="padding-top: 0;background: #eaebf0;">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
import Vheader from './children/header'
import Vmenu from './children/menu'
export default {
  components: {
    Vheader, Vmenu
  },
  data: () => ({}),
  computed: {
    ...mapGetters(['controlsOption'])
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-enter {
  transform: translateX(280px);
  opacity: 0;
}
</style>
