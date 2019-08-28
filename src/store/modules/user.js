/** @format */
import { SET_TOKEN, SET_INFO, ACCESS_TOKEN } from '../mutation-types'
import { setCookie, removeCookie } from '@/utils/cookie'
import { login, logout } from '@/api/login'

const user = {
  state: {
    token: '',
    info: {}
  },
  mutations: {
    [SET_TOKEN](state, token) {
      state.token = token
    },
    [SET_INFO](state, info) {
      state.info = info
    }
  },
  actions: {
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            const result = response.data.result
            setCookie(ACCESS_TOKEN, result.token, result.expire_time)
            commit('SET_TOKEN', result.token)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 登出
    Logout({ commit, state }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        // commit('SET_ROLES', [])
        removeCookie(ACCESS_TOKEN)
        logout(state.token)
          .then(() => {
            resolve()
          })
          .catch(() => {
            resolve()
          })
      })
    }
  }
}
export default user
