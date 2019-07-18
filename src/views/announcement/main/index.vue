<template>
  <v-layout row wrap>
    <v-flex xs12 md4 lg4 class="fixed-box">
      <announcement-list></announcement-list>
    </v-flex>
    <v-flex xs12 md8 lg8 class="fixed-box">
      <announcement-content></announcement-content>
    </v-flex>
  </v-layout>
</template>

<script>
import AnnouncementContent from './announcementContent'
import AnnouncementList from './announcementList'
export default {
  components: {
    AnnouncementContent, AnnouncementList
  }
}
</script>

<style>
.fixed-box {
  position: relative;
  height: calc(100vh - 176px);
  overflow-y: auto;
}
</style>
