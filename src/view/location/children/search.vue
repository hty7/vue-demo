<template>
  <div>
    <v-form v-model="params">
      <v-layout row wrap>
        <v-flex md4>
          <v-text-field label="name" v-model="params.name" required></v-text-field>
        </v-flex>
        <v-flex md4>
          <v-text-field label="name" v-model="params.name" required></v-text-field>
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
      name: null
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
