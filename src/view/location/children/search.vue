<template>
  <div>
    <v-form v-model="params">
      <v-layout row wrap>
        <v-flex md3>
          <v-text-field label="姓名" v-model="params.name" required></v-text-field>
        </v-flex>
        &nbsp;
        <!-- <v-spacer></v-spacer> -->
        <v-flex md3>
          <v-text-field label="日期" v-model="params.date" required></v-text-field>
        </v-flex>
        <v-btn color="info">查询</v-btn>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    params: {
      name: null,
      date: ''
    }
  }),
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
