<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <announcement-header @showTab="showTab"></announcement-header>
      </v-flex>
    </v-layout>
    <div class="section-content">
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import AnnouncementHeader from './children/announcementHeader'
import Main from './main'
import Edit from './edit'
import DraftBox from './draft-box'
export default {
  components: {
    AnnouncementHeader, Main, Edit, DraftBox
  },
  data: () => ({
    currentTabComponent: 'Main'
  }),
  methods: {
    showTab (el) {
      this.currentTabComponent = el
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
