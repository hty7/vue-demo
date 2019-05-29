<template>
  <div>
    <search>
      <v-btn slot="btnContent" color="success" @click="editItem">新增</v-btn>
    </search>
    <table-Data ref="table"></table-Data>
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
  methods: {
    editItem () {
      this.$refs.table.editItem()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
