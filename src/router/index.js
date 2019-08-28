/** @format */

import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from './constantRoutes.js'
import { setDocumentTitle, docTitle } from '@/utils/docUtil'
import { getCookie } from '@/utils/cookie'
import { ACCESS_TOKEN } from '@/store/mutation-types'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// const router = new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       redirect: 'dashboard'
//     },
//     {
//       path: '/login',
//       name: 'login',
//       meta: {
//         ignoreAuth: true,
//         title: '登录'
//       },
//       component: resolve => require(['@/pages/Login'], resolve)
//     },
//     {
//       path: '/dashboard',
//       name: 'dashboard',
//       meta: {
//         ignoreAuth: false,
//         title: '工作台'
//       },
//       component: resolve => require(['@/pages/HomePage'], resolve)
//     }
//   ]
// })

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  to.meta &&
    (typeof to.meta.title !== 'undefined' &&
      setDocumentTitle(`${to.meta.title} - ${docTitle}`))

  if (to.meta && to.meta.ignoreAuth) {
    next()
  } else {
    if (getCookie(ACCESS_TOKEN)) {
      next()
    } else {
      next({ path: '/user/login' })
    }
  }
})

export default router
