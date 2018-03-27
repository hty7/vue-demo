<template>
  <div>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-media></v-card-media>
          <v-card-title>
            <div>
              <h3 class="headline mb-0">文章信息</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex md2 xs4>
                <v-subheader>接受人</v-subheader>
              </v-flex>
              <v-flex xs8 md10>
                <v-select label="请选择接受人" :items="people" item-text="name" item-value="name"
                  multiple chips tags max-height="auto" autocomplete clearable v-model="chips">
                  <template slot="selection" slot-scope="data">
                    <v-chip close @input="remove(data.item)" :selected="data.selected" class="chip--select-multi" :key="JSON.stringify(data.item)">
                      <v-avatar class="teal">{{ data.item | getInitials }}</v-avatar>
                      <strong>{{ data.item }}</strong>&nbsp;
                    </v-chip>
                  </template>
                  <template slot="item" slot-scope="data">
                    <template>
                      <v-list-tile-avatar>
                        <v-icon>account_circle</v-icon>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </template>
                  </template>
                </v-select>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex md2 xs4>
                <v-subheader>标题</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field name="input-1" label="请输入文章标题" v-model="params.title"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex md2 xs4>
                <v-subheader>摘要</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field name="input-1" label="请输入文章摘要" v-model="params.des"></v-text-field>
              </v-flex>
            </v-layout>
            <v-container fluid>
              <v-switch color="success" label="是否定时发送" v-model="params.isTiming"></v-switch>
            </v-container>
            <v-container fluid>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field name="input-1" label="文本内容" textarea></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-tooltip top>
              <v-btn color="blue-grey" fab small dark slot="activator">
                <v-icon>android</v-icon>
              </v-btn>
              <span>阅览文章</span>
            </v-tooltip>
            <v-tooltip top>
              <v-btn color="primary" class="white--text"  fab small dark slot="activator" @click="submit" :disabled="!valid">
                <v-icon>cloud_upload</v-icon>
              </v-btn>
              <span>保存文章</span>
            </v-tooltip>
            <v-btn color="success" class="white--text"  round  @click="backTo" :disabled="!valid">
              返回
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" max-width="300px">
      <v-card>
        <v-card-text style="text-align: left;" v-show="!isLoading">是否发送公告？</v-card-text>
        <v-card-text v-show="isLoading">
          正在发送
          <v-progress-linear height="2" :indeterminate="true"></v-progress-linear>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat="flat" color="red" @click.native="cancel" v-show="isLoading">取消</v-btn>
          <v-btn flat="flat" @click.native="dialog = false" v-show="!isLoading">取消</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="submitData" v-show="!isLoading">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    timeDoing: null,
    isLoading: false,
    dialog: false,
    valid: true,
    chips: ['YJ', 'LJJ'],
    people: [
      { name: 'Sandra Adams', group: '技术部' },
      { name: 'Ali Connors', group: '技术部' },
      { name: 'Trevor Hansen', group: '技术部' },
      { name: 'Tucker Smith', group: '市场部' }
    ],
    params: {
      title: '',
      des: '',
      isTimeing: false
    },
    checkbox: false
  }),
  computed: {
  },
  filters: {
    getInitials (val) {
      return val.substr(0, 1)
    }
  },
  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    },
    submit () {
      this.dialog = true
    },
    submitData () {
      this.isLoading = true
      this.timeDoing = setTimeout(() => {
        this.dialog = false
        this.$emit('toNext')
      }, 3000)
    },
    cancel () {
      clearTimeout(this.timeDoing)
      this.isLoading = false
    },
    backTo () {
      this.$emit('toBack')
    },
    clear () {}
  }
}
</script>

<style lang="scss" scoped>
</style>
