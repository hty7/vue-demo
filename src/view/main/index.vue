<template>
  <div>
    <self-content ref="table"></self-content>
  </div>
</template>

<script>
import SelfContent from './children/selfContent'
export default {
  components: {
    SelfContent
  },
  data: () => ({}),
  computed: {
  },
  methods: {
    search (params) {
      params.currentPage = 1
      this.$refs.table.initialize(params)
    },
    editItem () {
      this.$refs.table.editItem()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
