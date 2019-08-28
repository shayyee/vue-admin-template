<!-- @format -->

<template>
  <div class="main">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'username',
            {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            }
          ]"
          placeholder="Username"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: 'Please input your password!' }
              ]
            }
          ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          class="login-form-button"
          :loading="loginBtn"
          :disabled="loginBtn"
        >
          Log in
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import md5 from 'md5'
import { mapActions } from 'vuex'
import { greeting } from '@/utils'

export default {
  data() {
    return {
      loginBtn: false
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
  methods: {
    ...mapActions(['Login']),
    handleSubmit(e) {
      e.preventDefault()
      const that = this
      this.form.validateFields(['username', 'password'], (err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          const loginParams = { ...values }
          loginParams.password = md5(values.password)
          that
            .Login(loginParams)
            .then(() => that.loginSuccess())
            .catch(err => that.requestFailed(err))
            .finally(() => {
              that.loginBtn = false
            })
        }
      })
    },
    loginSuccess() {
      this.$router.push({ name: 'dashboard' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `${greeting()}，欢迎回来`
        })
      }, 1000)
    },
    requestFailed(err) {
      this.$notification.error({
        message: '错误',
        description:
          ((err.response || {}).data || {}).message ||
          '请求出现错误，请稍后再试',
        duration: 4
      })
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  min-width: 260px;
  width: 368px;
  margin: 0 auto;
}
</style>
