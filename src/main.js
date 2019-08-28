/** @format */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Menu,
  Button,
  Icon,
  Form,
  Input,
  Select,
  notification,
  Modal
} from 'ant-design-vue'
// mock
import './mock'

Vue.use(Menu)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Form)
Vue.use(Input)
Vue.use(Select)
Vue.use(notification)
Vue.use(Modal)

Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$confirm = Modal.confirm

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
