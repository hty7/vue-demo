<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 v-for="(item, index) in imgList" :key="index">
        <img class="image" v-lazy="item" alt="image" width="100%" height="100%">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    imgList: [
      'https://randomuser.me/api/portraits/men/22.jpg',
      'https://randomuser.me/api/portraits/men/23.jpg',
      'https://randomuser.me/api/portraits/men/24.jpg',
      'https://randomuser.me/api/portraits/men/25.jpg',
      'https://randomuser.me/api/portraits/men/26.jpg',
      'https://randomuser.me/api/portraits/men/27.jpg',
      'https://randomuser.me/api/portraits/men/28.jpg',
      'https://randomuser.me/api/portraits/men/29.jpg',
      'https://randomuser.me/api/portraits/men/30.jpg',
      'https://randomuser.me/api/portraits/men/31.jpg',
      'https://randomuser.me/api/portraits/men/32.jpg',
      'https://randomuser.me/api/portraits/men/33.jpg'
    ]
  }),
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
