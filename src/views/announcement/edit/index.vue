<template>
  <div>
    <v-container fluid>
      <v-layout justify-center row wrap>
        <v-flex xs12 md6 lg6>
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="announcementMsg.title"
              label="标题"
              required
            ></v-text-field>
            <v-combobox
              v-model="announcementMsg.acceptUsers"
              :items="items"
              label="公告接受人员"
              multiple
              chips
            >
              <template v-slot:selection="data">
                <v-chip
                  :key="JSON.stringify(data.item)"
                  :selected="data.selected"
                  :disabled="data.disabled"
                  class="v-chip--select-multi"
                  @input="data.parent.selectItem(data.item)"
                >
                  <v-avatar
                    class="accent white--text"
                    v-text="data.item.slice(0, 1).toUpperCase()"
                  ></v-avatar>
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>  
</template>

<script>
export default {
  data: () => ({
    announcementMsg: {
      title: '',
      acceptUsers: ['Tom', 'Tone'],
    },
    items: [
      'Tom',
      'Jane',
      'Tone',
      'Buteng'
    ]
  })
}
</script>

<style>

</style>
