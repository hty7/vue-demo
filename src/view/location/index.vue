<template>
  <div>
    <search></search>
    <table-Data></table-Data>
  </div>
</template>

<script>
import Search from './children/search'
import TableData from './children/tableData'
export default {
  components: {
    TableData, Search
  },
  data: () => ({}),
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
