import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'

// 自定义validate
const dictionary = {
  zh_CN: {
    messages: {
      email: () => '请输入正确的邮箱格式',
      required: (field) => '请输入' + field
    },
    attributes: {
      email: '邮箱',
      password: '密码',
      card_number: '物联网卡号',
      ICCID: 'ICCID卡号',
      rel_verify_code: '实名校验码',
      phone: '手机号码',
      verify_code: '验证码',
    }
  }
}

// 配置项
const config = {
  errorBagName: 'errors',
  fieldsBagName: 'fieldBags',  // 报冲突时 可自定义修改字段名称
  delay: 0, // 错误提示的延迟时间
  strict: true, // 没有设置规则的表单不进行校验，
  enableAutoClasses: false,
  locale: 'zh_CN', // 对语言（中文）的配置
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  dictionary: dictionary,
  events: 'blur',
  inject: true
}

// 配置中文
Validator.localize('zh_CN', zh)

// 扩展自定义规则
const ValidatorRules = {
  iccid: {
    getMessage: () => '您填写的ICCID卡号无效。请正确填写SIM卡上20位ICCID卡号。',
    validate: val => val.length === 20
  },
  cardNumber: {
    getMessage: () => '您填写的号码无效。请正确填写SIM卡上号码。',
    validate: val => val.length === 12
  },
  verifyCode: {
    getMessage: () => '您填写的PUK码无效。请正确填写SIM卡上8位PUK码。',
    validate: val => val.length === 8
  },
  phone: {
    getMessage: () => '您填写的联系电话无效。请正确填写11位手机号码。',
    validate: val => {
      return val.length === 11 && /^((13|14|15|17|18|19)[0-9]{1}\d{8})$/.test(val)
    }
  },
  verifyCode2: {
    getMessage: () => '请正确填写6位短信验证码',
    validate: val => val.length === 6
  }
}

Object.keys(ValidatorRules).forEach(e => Validator.extend(e, ValidatorRules[e]))

Vue.use(VeeValidate, config)
