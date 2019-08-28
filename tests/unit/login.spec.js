/**
 * @format
 * 测试login  action调用
 * */

import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import LoginPage from '@/pages/Login'
import { Button, Icon, Form, Input } from 'ant-design-vue'

const localVue = createLocalVue()
localVue.use(Button)
localVue.use(Icon)
localVue.use(Form)
localVue.use(Input)

localVue.use(Vuex)

describe('Login.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      Login: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })
  it('calls store action "Login" when button is clicked', () => {
    const wrapper = mount(LoginPage, {
      localVue,
      store,
      sync: false
    })
    actions.Login()
    const button = wrapper.find('.login-form-button')
    button.trigger('click')
    expect(actions.Login).toHaveBeenCalled()
  })
})
