<template>
  <v-app class="login">
    <div class="login-container">
      <div class="login-container-content">
        <div class="login-img">
        </div>
        <div class="login-card">
          <span class="login-title">VUE-DEMO</span>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field solo flat prepend-icon="account_box" autofocus label="Name" v-model="params.name" :rules="nameRules" :counter="10" required></v-text-field>
            <v-text-field solo flat prepend-icon="lock_open" label="Password" v-model="params.pw" :counter="6" required></v-text-field>
            <v-layout row wrap class="verifiCode">
              <v-flex xs8>
                <v-text-field
                  solo
                  flat
                  label="verifiCode"
                  v-model="params.verifiCode"
                  prepend-icon="fingerprint"
                  type="text"
                  @keyup.enter.native="login"
                  required
                >
                </v-text-field>
              </v-flex>
              <v-flex xs4 justify-center>
                <div style="padding: 5px;cursor: pointer;">
                  <img src="@/assets/images/initVerifyCode.jpg" alt="验证码">
                </div>
              </v-flex>
            </v-layout>
          </v-form>
          <v-btn
            block
            depressed
            round
            color="success"
            dark
            @click.native="login"
          >
            登录
          </v-btn>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div class="des">
        Copyright &copy; {{ new Date().getFullYear() }} HTY版权所有
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    show: false,
    params: {
      name: '',
      pw: '',
      verifiCode: '',
      isAgress: false
    },
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ]
  }),
  computed: {
  },
  methods: {
    async login () {
      this.setSessionStorage('isLogin', true)
      this.$router.push({path: '/'})
      this.$toast('登陆成功')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  &-container {
    height: 100%;
    min-height: 450px;
    width: 100%;
    overflow: hidden;
    background: url('../../assets/images/login_bg.jpg') 30% no-repeat;
    &-content {
      display: flex;
      align-items: center;
      height: 100%;
      width: 1200px;
      margin: 0 auto;
      .login-img {
        flex: 1;
      }
      .login-card {
        opacity: 0;
        animation: fadeInDown .5s .1s forwards linear;
        flex: 0 0 380px;
        height: 420px;
        padding: 30px 46px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 2px 2px 5px rgba(0,0,0,.3), -2px -2px 5px rgba(0,0,0,.3);
        .login-title {
          color: #228adc;
          font-size: 24px;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 18px;
        }
      }
    }
  }
  &-footer {
    height: 10%;
    width: 100%;
    color: rgb(131, 131, 131);
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    right: 0;
    .des {
      text-align: center;
      margin-top: 20px;
    }
  }
}
@keyframes fadeInDown {
  0% {
    transform: translate3d(0,-100%,0);
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

@media only screen and (max-width: 1500px) {
  .login-main, .login-container-content {
    width: 80%;
  }
  .login-container-content .login-card {
    height: 420px;
  }
  .login-footer {
    height: 100px;
  }
}
@media only screen and (max-width: 1200px) {
  .login-main, .login-container-content {
    width: 80%;
  }
  .login-footer {
    height: 80px;
  }
}
@media only screen and (max-width: 992px) {
  .login-main, .login-container-content {
    justify-content: flex-end;
    width: 90%;
  }
  .login-img {
    display: none;
  }
  .login-card {
    flex: none !important;
  }
  .login-footer {
    height: 60px;
  }
}
@media only screen and (max-width: 768px) {
  .login-main, .login-container-content {
    justify-content: center;
  }
}
@media only screen and (max-width: 480px) {
  .login-container {
    background: none;
  }
  .login-container-content .login-card {
    box-shadow: none;
  }
}
</style>
<style lang="scss">
.login {
  .v-text-field {
    position: relative;
  }
  .v-input__prepend-outer {
    position: absolute;
    left: 20px;
    top: -6px;
    z-index: 2;
    .v-icon {
      color: #888 !important;
    }
  }
  .v-input__slot {
    min-height: 38px !important;
    margin: 0 0 5px 0 !important;
    padding: 0 12px 0 48px !important;
    background-color: #ececec !important;
    border-radius: 20px !important;
    border: none !important;
  }
  .verifiCode .v-text-field__details {
    margin-bottom: 0;
  }
}

</style>
