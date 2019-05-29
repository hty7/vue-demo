<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step step="1" :complete="e1 > 1">资料填写 1</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" :complete="e1 > 2">公告信息 2</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">公告免责 3</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <Step1 @toNext="e1 = 2"></Step1>
          </v-stepper-content>
          <v-stepper-content step="2">
            <Step2 @toNext="e1 = 3" @toBack="e1 = 1"></Step2>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-flex>
  </v-layout>
</template>

<script>
// import Step1 from './children/step1'
// import Step2 from './children/step2'
export default {
  components: {
    Step1: resolve => { require(['./children/step1'], resolve) },
    Step2: resolve => { require(['./children/step2'], resolve) }
  },
  data: () => ({
    e1: 0
  }),
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
