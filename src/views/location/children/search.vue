<template>
  <div>
    <v-form v-model="valid">
      <v-layout row wrap>
        <v-flex md3>
          <v-text-field solo single-line clearable required :label="$t('message.name')" v-model="params.name"></v-text-field>
        </v-flex>&nbsp;
        <v-flex md3>
          <v-menu ref="menu" lazy :close-on-content-click="false" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px">
            <v-text-field slot="activator" :label="$t('message.date')" v-model="params.date"
              solo readonly required>
            </v-text-field>
            <v-date-picker ref="picker" v-model="params.date" @change="save"
              :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
              :events="markDateColor"
              min="1950-01-01" :max="new Date().toISOString().substr(0, 10)">
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-btn color="info">{{$t('buttom.search')}}</v-btn>
        <slot name="btnContent"></slot>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    valid: true,
    menu: false,
    params: {
      name: null,
      date: ''
    }
  }),
  watch: {
    menu (val) {
      val && this.$nextTick(() => {
        this.$refs.picker.activePicker = 'YEAR'
      })
    }
  },
  computed: {
  },
  methods: {
    markDateColor (date) {
      const [,, day] = date.split('-')
      return parseInt(day, 10) % 3 === 0
    },
    save (date) {
      this.$refs.menu.save(date)
    }
  }
}
</script>

<style scoped>

</style>
