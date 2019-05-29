<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Dessert name" v-model="editedItem.name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Calories" v-model="editedItem.calories"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Fat (g)" v-model="editedItem.fat"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Carbs (g)" v-model="editedItem.carbs"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Protein (g)" v-model="editedItem.protein"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">{{$t('buttom.cancel')}}</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">{{$t('buttom.save')}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table :headers="headers" :items="items" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <tr @click="showUserInfo(props)">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.calories }}</td>
          <td>{{ props.item.fat | toNumber}}</td>
          <td>{{ props.item.carbs }}</td>
          <td>{{ props.item.protein }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="editItem(props.item)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteItem(props.item)">
              <v-icon color="pink">delete_outline</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    <div class="text-xs-right">
      <v-pagination :length="3" v-model="page"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1,
    dialog: false,
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

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

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
    },

    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style scoped>

</style>
