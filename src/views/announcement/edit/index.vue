<template>
  <div class="announcement-content">
    <v-layout justify-center row wrap>
      <v-flex xs12 md8 lg8>
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
                small
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
          <div id="editor"></div>
          <div class="upload-container">
            <p>附件：</p>
            <div class="upload-container-dragger">
              <img src="@/assets/images/icon-upload.png" alt="upload" class="upload-img">
              <div class="upload__text">
                将文件拖到此处，或点击上传
              </div>
            </div>
          </div>
        </v-form>
      </v-flex>
    </v-layout>
  </div>  
</template>

<script>
import 'quill/dist/quill.snow.css'
import * as Quill from 'quill'
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
    ],
    editorDom: null,
    toolbarOptions: [
      ['bold', 'italic', 'underline', 'strike'], //开关按钮
      ['blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}], // 上标/下标
      [{'indent': '-1'}, {'indent': '+1'}], // 减少缩进/缩进
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
      [{'color': []}, {'background': []}], //使用主题的默认下拉
      [{'align': []}],
      ['clean'] //移除格式化
    ]
  }),
  mounted() {
    this.$nextTick(() => {
      this.editorDom = new Quill('#editor', {
        modules: {
          toolbar: this.toolbarOptions
        },
        theme: 'snow',
        placeholder:'请输入',
      })
    })
  },
}
</script>

<style lang="scss" scoped>
#editor {
  min-height: 120px;
}
.announcement-content {
  position: relative;
  margin-bottom: 12px;
  background: #fff;
  padding: 48px 12px;
  border-radius: 5px;
  box-shadow: 0 3px 5px 1px rgba(181, 181, 181, 0.4);
  .upload-container {
    margin-top: 12px;
    &-dragger {
      background-color: #fff;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      box-sizing: border-box;
      width: 100%;
      height: 180px;
      text-align: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      .upload-img {
        width: 64px;
        margin: 40px 0 16px;
        line-height: 50px;
      }
      .upload__text {
        color: #606266;
        font-size: 14px;
        text-align: center;
      }
    }
  }
}
</style>

