<template>
  <v-layout row wrap>
    <v-flex xs12 md12 xl12>
      <self-tool></self-tool>
    </v-flex>
    <v-flex xs5 md3 xl3>
      <self-tree></self-tree>
    </v-flex>
    <v-flex xs7 md9 xl9>
      <self-table></self-table>
    </v-flex>
  </v-layout>
</template>

<script>
import SelfTool from './children/tool'
import SelfTable from './children/table'
import SelfTree from './children/tree'
export default {
  components: {
    SelfTable, SelfTree, SelfTool
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
