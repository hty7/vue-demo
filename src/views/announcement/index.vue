<template>
  <div class="section-content">
    <v-layout>
      <v-flex xs12 md4 lg4 class="fixed-box">
        <announcement-list></announcement-list>
      </v-flex>
      <v-flex xs12 md8 lg8 class="fixed-box">
        <announcement-content></announcement-content>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AnnouncementContent from './children/announcementContent'
import AnnouncementList from './children/announcementList'
export default {
  components: {
    AnnouncementContent, AnnouncementList
  }
}
</script>

<style lang="scss" scoped>
.fixed-box {
  height: calc(100vh - 52px);
  overflow-y: auto;
}
</style>
