<template>
  <div class="attractions_tree">
    <el-input placeholder="输入查询的区域名称" v-model="filterText"></el-input>
    <div ref="treeBox">
      <el-tree
        :data="data"
        show-checkbox
        accordion
        node-key="id"
        ref="tree"
        :filter-node-method="filterNode"
        :default-expanded-keys="[5, 6]"
        :default-checked-keys="[15]"
        :props="defaultProps">
        <span slot-scope="{ node, data }">
        <span><i :class="data.hasChildren?'el-icon-menu':  'el-icon-document'"></i> {{ node.label }}</span>
      </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filterText: '',
      data: [
        {
          id: 1,
          label: '酒店（295）',
          hasChildren: 1,
          children: [{
            id: 7,
            label: '佛山嘉思高酒店'
          }, {
            id: 9,
            label: '佛山岭南天地马哥孛罗酒店'
          }, {
            id: 10,
            label: '佛山恒安瑞士大酒店'
          }]
        }, {
          id: 2,
          label: '小学（25）',
          hasChildren: 1,
          children: [{
            id: 8,
            label: '佛山南庄侨立小学'
          }, {
            id: 9,
            label: '佛山高明区沛明实验小学'
          }]
        }, {
          id: 3,
          label: '歌剧院（20）',
          hasChildren: 1,
          children: [{
            id: 10,
            label: '佛山大剧院'
          }]
        }, {
          id: 4,
          label: '交通枢纽（342）',
          hasChildren: 1,
          children: [{
            id: 11,
            label: '佛山西站'
          }, {
            id: 12,
            label: '广佛环线'
          }]
        }, {
          id: 5,
          label: '住宅小区（20）',
          hasChildren: 1,
          children: [{
            id: 13,
            label: '禅城区厚源路成凤里'
          }, {
            id: 14,
            label: '禅城区岭南大道43号'
          }]
        }, {
          id: 6,
          label: '景区（99）',
          hasChildren: 1,
          children: [{
            id: 15,
            label: '西樵山'
          }, {
            id: 16,
            label: '祖庙'
          }, {
            id: 17,
            label: '李小龙乐园'
          }, {
            id: 18,
            label: '黄飞鸿狮艺武术馆'
          }, {
            id: 19,
            label: '顺峰山公园'
          }, {
            id: 20,
            label: '高明生态园'
          }, {
            id: 21,
            label: '荷花奇境（三水荷花世界）'
          }, {
            id: 22,
            label: '顺德博物馆'
          }, {
            id: 23,
            label: '祖庙'
          }, {
            id: 24,
            label: '李小龙乐园'
          }, {
            id: 25,
            label: '黄飞鸿狮艺武术馆'
          }, {
            id: 26,
            label: '顺峰山公园'
          }, {
            id: 27,
            label: '高明生态园'
          }, {
            id: 28,
            label: '荷花奇境（三水荷花世界）'
          }, {
            id: 29,
            label: '顺德博物馆'
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },
  mounted () {
    window.onresize = () => {
      this.$nextTick(() => {
        this.$refs.treeBox.style.height = document.body.scrollHeight - 190 + 'px'
      })
    }
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }
}
</script>

<style lang="scss" scoped>
// .el-tree {
//   height: 100%;
//   overflow-y: auto;
//   margin-top: 12px;
//   padding: 4px;
//   background: rgba(91, 107, 125, 0.51);
//   color: #eee;
//   border-radius: 5px;
// }
.el-tree {
  height: 100%;
  overflow-y: auto;
  margin-top: 12px;
  padding: 4px;
  background: rgba(245, 245, 245, 0.59);
  border-radius: 5px;
}
</style>
<style lang="scss">
// .attractions_tree {
//   .el-checkbox__inner {
//     background-color: rgba(135, 140, 148, 0.63);
//   }
//   .el-tree-node:focus>.el-tree-node__content, .el-tree-node__content:hover {
//     background-color: rgba(255, 73, 73, 0.5);
//   }
// }
</style>
