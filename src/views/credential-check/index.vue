<template>
  <div class="credential-check">
    <div class="content-box">
      <div class="content-box-title">
        <h4>1、请上传身份证照片</h4>
        <div class="img">
          <img src="@/assets/images/camera.png" alt="camera">
        </div>
        <p class="des">
          根据国家对通信产品的
          <span class="emphasize">实名制要求</span>，需要您真实拍摄清晰无水印的证件照片。我们将严格保护您的身份信息安全。
        </p>
        <div class="shooting-example">
          <span>拍摄示例</span>
          <picture>
            <source type="image/webp" srcset="@/assets/images/webp/shooting-example.webp">
            <img src="@/assets/images/shooting-example.png" alt="拍摄示例">
          </picture>
        </div>
      </div>
      <div class="content-box-body">
        <!-- 上传身份证正面资料开始 -->
        <div class="camera-box">
          <label for="front_idCard" v-if="!updateFile.frontIdCard">
            <div class="mask">
              <div class="mask-content">
                <img src="@/assets/images/icons-camera.png" alt="camera_icon">
                <br />
                <span>
                  点击拍摄/上传人像面
                </span>
              </div>
              <input
                name="frontIdCard"
                id="front_idCard"
                type="file"
                accept="image/*"
                capture="camera"
                v-validate="'required'"
                @change="handleCamera($event, 'frontIdCard')"
              >
            </div>
            <picture>
              <source type="image/webp" srcset="@/assets/images/webp/idCard.webp">
              <img src="@/assets/images/idCard.jpg" alt="身份证正面">
            </picture>
          </label>
          <transition name="fade">
            <div class="upload-list" v-if="updateFile.frontIdCard">
              <div class="upload-list-content" :class="[deletings.frontIdCard? 'deleting':'']">
                <img class="custom-picture" :src="updateFile.frontIdCard" alt="身份证正面">
                <div class="picture-des">
                  <span>身份证正面</span>
                  <p>{{ updateFileName.frontIdCard }}</p>
                </div>
                <div class="upload-list-content-play" @click="setImageZoom(updateFile.frontIdCard)">
                  <img src="@/assets/images/icon-eye.png" alt="放大">
                </div>
                <div class="upload-list-content-del" @click="deletings.frontIdCard=!deletings.frontIdCard">
                  <img src="@/assets/images/icon-delete.png" alt="删除" v-if="!deletings.frontIdCard">
                  <img src="@/assets/images/icon-cancel-full.png" alt="取消" v-else>
                </div>
                <!-- <label class="upload-list-content-label">
                  <img src="@/assets/images/icon-checkmark2.png">
                </label> -->
              </div>
              <div class="upload-list-delete" :class="[deletings.frontIdCard? 'deletingBox':'']" @click="deleteFile('frontIdCard')">
                <span>删除</span>
              </div>
            </div>
          </transition>
        </div>
        <!-- 上传身份证正面资料结束 -->
        <!-- 上传身份证背面资料开始 -->
        <div class="camera-box">
          <label for="back_idCard" v-if="!updateFile.backIdCard">
            <div class="mask">
              <div class="mask-content">
                <img src="@/assets/images/icons-camera.png" alt="camera_icon">
                <br />
                <span>
                  点击拍摄/上传国徽面
                </span>
              </div>
              <input
                name="backIdCard"
                id="back_idCard"
                type="file"
                accept="image/*"
                capture="camera"
                v-validate="'required'"
                @change="handleCamera($event, 'backIdCard')"
              >
            </div>
            <picture>
              <source type="image/webp" srcset="@/assets/images/webp/idCard2.webp">
              <img src="@/assets/images/idCard2.png" alt="身份证背面">
            </picture>
          </label>
          <transition name="fade">
            <div class="upload-list" v-if="updateFile.backIdCard">
              <div class="upload-list-content" :class="[deletings.backIdCard? 'deleting':'']">
                <img class="custom-picture" :src="updateFile.backIdCard" alt="身份证背面">
                <div class="picture-des">
                  <span>身份证背面</span>
                  <p>{{ updateFileName.backIdCard }}</p>
                </div>
                <div class="upload-list-content-play" @click="setImageZoom(updateFile.backIdCard)">
                  <img src="@/assets/images/icon-eye.png" alt="放大">
                </div>
                <div class="upload-list-content-del" @click="deletings.backIdCard=!deletings.backIdCard">
                  <img src="@/assets/images/icon-delete.png" alt="删除" v-if="!deletings.backIdCard">
                  <img src="@/assets/images/icon-cancel-full.png" alt="取消" v-else>
                </div>
              </div>
              <div class="upload-list-delete" :class="[deletings.backIdCard? 'deletingBox':'']" @click="deleteFile('backIdCard')">
                <span>删除</span>
              </div>
            </div>
          </transition>
        </div>
        <!-- 上传身份证背面资料结束 -->
      </div>
    </div>
    <div class="content-box">
      <div class="content-box-title" style="border-bottom: 1px #cfcfcf dashed;">
        <h4>2、请拍摄本人免冠清晰照片</h4>
        <div class="img">
          <img src="@/assets/images/camera.png" alt="camera">
        </div>
        <p class="des">
          请拍摄
          <span class="emphasize">本人</span>
          清晰正面
          <span class="emphasize">免冠人像</span>
          进行人脸认证，注意：收到号卡后需要本人
          <span class="emphasize">视频认证</span>，视频认证与人脸认证需要
          <span class="emphasize">同一人</span>，否则号卡
          <span class="emphasize">无法激活。</span>
        </p>
      </div>
      <div class="content-box-body">
        <!-- 上传正面免冠头像资料开始 -->
        <div class="camera-box">
          <label for="crown_freePhoto" v-show="!updateFile.crownFreePhoto">
            <div class="mask">
              <div class="mask-content">
                <img src="@/assets/images/icons-camera.png" alt="camera_icon">
                <br />
                <span>
                  拍摄本人正面免冠头像
                </span>
              </div>
              <input
                name="crownFreePhoto"
                id="crown_freePhoto"
                type="file"
                accept="image/*"
                capture="user"
                v-validate="'required'"
                @change="handleCamera($event, 'crownFreePhoto')"
              >
            </div>
            <picture>
              <source type="image/webp" srcset="@/assets/images/webp/crownless-photo.webp">
              <img src="@/assets/images/crownless-photo.png" alt="免冠照片">
            </picture>
          </label>
          <transition name="fade">
            <div class="upload-list" v-if="updateFile.crownFreePhoto">
              <div class="upload-list-content" :class="[deletings.crownFreePhoto? 'deleting':'']">
                <img class="custom-picture" :src="updateFile.crownFreePhoto" alt="免冠照片">
                <div class="picture-des">
                  <span>本人正面免冠头像</span>
                  <p>{{ updateFileName.crownFreePhoto }}</p>
                </div>
                <div class="upload-list-content-play" @click="setImageZoom(updateFile.crownFreePhoto)">
                  <img src="@/assets/images/icon-eye.png" alt="放大">
                </div>
                <div class="upload-list-content-del" @click="deletings.crownFreePhoto=!deletings.crownFreePhoto">
                  <img src="@/assets/images/icon-delete.png" alt="删除" v-if="!deletings.crownFreePhoto">
                  <img src="@/assets/images/icon-cancel-full.png" alt="取消" v-else>
                </div>
              </div>
              <div class="upload-list-delete" :class="[deletings.crownFreePhoto? 'deletingBox':'']" @click="deleteFile('crownFreePhoto')">
                <span>删除</span>
              </div>
            </div>
          </transition>
          <!-- <div class="mask" v-show="updateFile.crownFreePhoto">
            <div class="mask-content">
              <img src="@/assets/images/icon-check.png" alt="camera_icon">
              <br />
              <span>
                重新拍摄本人正面免冠头像
              </span>
            </div>
            <input id="file_card" type="file" accept="image/*" capture="camera" @change="handleCamera($event, 'crownFreePhoto')">
          </div>
          <img class="custom-picture" :src="updateFile.crownFreePhoto" alt="免冠照片" v-show="updateFile.crownFreePhoto"> -->
        </div>
        <p class="description">
          请在光线较好环境下拍摄，并露出人像五官，面部无遮档
        </p>
        <!-- 上传正面免冠头像资料结束 -->
      </div>
    </div>
    <div class="footer">
      <v-btn
        fab
        color="blue-grey"
        dark
        small
        depressed
        @click="goBack"
      >
        <v-icon>reply</v-icon>
      </v-btn>
      <v-btn
        round
        color="primary"
        dark
        style="width: 280px;"
        :disabled="submitButton"
        @click="submitData"
      >
        下一步
      </v-btn>
    </div>
    <!-- 查看图片开始 -->
    <v-dialog v-model="imageZoom" width="300" lazy transition="dialog-bottom-transition">
      <v-card>
        <img class="custom-picture" :src="imageZoomFile" style="width: 100%;">
      </v-card>
    </v-dialog>
    <!-- 查看图片结束 -->
    <!-- loading加载模块开始 -->
    <v-dialog v-model="loading" persistent width="90%">
      <v-card>
        <v-card-text>
          <p style="font-size: 14px;">
            资料正在提交中，请稍等
          </p>
          <v-progress-linear indeterminate style="margin: 0.6rem 0;"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- loading加载模块结束 -->
    <!-- 身份证信息确认开始 -->
    <v-dialog v-model="dialog" lazy persistent width="90%" content-class="customize-dialog">
      <information-confirm @cancel="cancel" @nextStep="nextStep"></information-confirm>
    </v-dialog>
    <!-- 身份证信息确认结束 -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InformationConfirm from './children/informationConfirm'
export default {
  name: 'CredentialCheck',
  components: {
    InformationConfirm
  },
  data: () => ({
    verifyTitle: '获取验证码',
    deletings: {
      frontIdCard: '',
      backIdCard: '',
      crownFreePhoto: ''
    },
    form: {
      phone: null,
      verifyCode: null
    },
    updateFile: {
      frontIdCard: '',
      backIdCard: '',
      crownFreePhoto: ''
    },
    updateFileName: {
      frontIdCard: '',
      backIdCard: '',
      crownFreePhoto: ''
    },
    imageZoomFile: '',
    submitButton: true,
    imageZoom: false,
    loading: false,
    dialog: false
  }),
  computed: {
    ...mapGetters(['step1'])
  },
  watch: {
    updateFile: {
      async handler () {
        this.submitButton = !(await this.validateForm())
      },
      deep: true
    }
  },
  methods: {
    handleCamera (e, targetName) {
      let file = e.target.files[0]
      let reader = new FileReader()
      // 获取图像的base64编码
      reader.addEventListener('load', () => {
        this.updateFileName[targetName] = file.name
        this.updateFile[targetName] = reader.result
      }, false)
      if (file) {
        reader.readAsDataURL(file)
      }
    },
    deleteFile (targetName) {
      this.updateFile[targetName] = ''
      this.deletings[targetName] = false
    },
    setImageZoom (ev) {
      if (ev) this.imageZoom = true
      this.imageZoomFile = ev
    },
    // 表单校验
    validateForm () {
      let arr = {
        frontIdCard: this.updateFile.frontIdCard,
        backIdCard: this.updateFile.backIdCard,
        crownFreePhoto: this.updateFile.crownFreePhoto
      }
      let res = this.$validator.validateAll(arr)
      return res
    },
    // 提交本页面数据进行校验
    async submitData () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.preventScroll(true) // 阻止页面滑动穿透行为
        this.dialog = true
      }, 4000)
    },
    // 关闭弹窗
    cancel () {
      this.preventScroll(false)
      this.dialog = !this.dialog
    },
    // 完成提交进入下一步
    nextStep () {
      this.preventScroll(false)
      this.$store.commit('SET_MENULIST_VALIDATE', {index: 2, status: true})
      this.$router.push({ path: '/face-check' })
      this.$store.commit('SET_MENULIST_STATUS', {oldIndex: 2, newIndex: 3})
    },
    // 返回上一页
    goBack () {
      this.$router.push({path: '/phone-binding'})
      this.$store.commit('SET_MENULIST_STATUS2', {index: 2, status: ''})
      this.$store.commit('SET_MENULIST_STATUS2', {index: 1, status: 'active'})
    }
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
