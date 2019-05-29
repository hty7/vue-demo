<template>
  <div class="tree-content">
      <v-treeview
      v-model="tree"
      :open="open"
      :items="items"
      activatable
      item-key="name"
      open-on-click
    >
      <template slot="prepend" slot-scope="{ item, open }">
        <v-icon v-if="!item.file">
          {{ open ? 'folder-open' : 'folder' }}
        </v-icon>
        <v-icon v-else>
          {{ files[item.file] }}
        </v-icon>
      </template>
    </v-treeview>
  </div>
</template>

<script>
export default {
  data: () => ({
    open: ['Users', 'Arcgis'],
    files: {
      file: 'bookmarks',
      html: 'fiber_new',
      js: 'view_stream',
      json: 'restore_page',
      md: 'settings_ethernet',
      pdf: 'book',
      png: 'feedback',
      txt: 'extension',
      xls: 'https'
    },
    tree: [],
    items: [
      { name: 'Packages' },
      { name: 'Types' },
      {
        name: 'Users',
        children: [
          {
            name: 'ANONYMOUS',
            children: [{
              name: 'ADDRESS',
              file: 'file'
            }]
          },
          {
            name: 'APEX_033',
            file: 'file'
          },
          {
            name: 'BI',
            file: 'file'
          }
        ]
      },
      {
        name: 'Roles',
        children: [
          {
            name: 'ANONYMOUS',
            children: [{
              name: 'ADDRESS',
              file: 'file'
            }]
          },
          {
            name: 'APEX_033',
            file: 'file'
          },
          {
            name: 'BI',
            file: 'file'
          }
        ]
      },
      {
        name: 'Arcgis',
        children: [
          {
            name: 'MAP',
            children: [{
              name: 'MAP_CON_USER',
              file: 'file'
            }, {
              name: 'MAP_INFO',
              file: 'file'
            }]
          },
          {
            name: 'CELLS',
            file: 'file'
          },
          {
            name: 'POI',
            file: 'file'
          },
          {
            name: 'ANY',
            file: 'file'
          }
        ]
      },
      {
        name: 'View',
        file: 'txt'
      }
    ]
  }),
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.tree-content {
  height: 645px;
  overflow-y: auto;
  background: #d4eaff;
  padding: 20px 5px;
}
</style>
