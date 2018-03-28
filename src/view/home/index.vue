<template>
  <v-app id="inspire" :dark="controlsOption.hints">
    <Vheader></Vheader>
    <Vmenu></Vmenu>
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
