<template>
  <baidu-map mapWidth="100%" mapHeight="500px"></baidu-map>
</template>

<script>
import BaiduMap from '@/components/baiduMap'
export default {
  components: {
    BaiduMap
  },
  data: () => ({
    loading: false
  })
}
</script>

<style lang="scss" scoped>
</style>
