<template>
  <v-app id="inspire" :dark="controlsOption.hints">
    <Vheader></Vheader>
    <Vmenu></Vmenu>
    <v-content>
      <v-container fluid>
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </v-container>
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
