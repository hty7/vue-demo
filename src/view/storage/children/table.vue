<template>
  <div>
    <v-data-table :headers="headers" :items="items" hide-actions>
      <template slot="items" slot-scope="props">
        <tr @click="showUserInfo(props)">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.calories }}</td>
          <td>{{ props.item.fat | toNumber}}</td>
          <td>{{ props.item.carbs }}</td>
          <td>{{ props.item.protein }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {text: '名称', align: 'center', sortable: false, value: 'name'},
      { text: '数量', align: 'center', value: 'calories' },
      { text: '均值', align: 'center', value: 'fat' },
      { text: 'Carbs (g)', align: 'center', value: 'carbs' },
      { text: 'Protein (g)', align: 'center', value: 'protein' },
      { text: '操作', align: 'center', value: 'name', sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: 'default',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.items = [
        { name: 'Frozen Yogurt', calories: 159, fat: '6.0zzz', carbs: 24, protein: 4.0 },
        { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
        { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0 },
        { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
        { name: 'Frozen Yogurt', calories: 159, fat: '6.0zzz', carbs: 24, protein: 4.0 },
        { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
        { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0 },
        { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
        { name: 'Frozen Yogurt', calories: 159, fat: '6.0zzz', carbs: 24, protein: 4.0 },
        { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
        { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0 },
        { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 }
      ]
    },

    showUserInfo (val) {
      console.log('ddd', val)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
