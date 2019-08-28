/**
 * 基础路由
 *
 * @format
 */
import UserLayout from '@/layouts/UserLayout'
export const constantRouterMap = [
  {
    path: '/',
    redirect: 'dashboard'
  },
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          ignoreAuth: true,
          title: '登录'
        },
        component: () =>
          import(/* webpackChunkName: "user" */ '@/pages/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        meta: {
          ignoreAuth: true,
          title: '注册'
        },
        component: () =>
          import(/* webpackChunkName: "user" */ '@/pages/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        meta: {
          ignoreAuth: true,
          title: '注册成功'
        },
        component: () =>
          import(/* webpackChunkName: "user" */ '@/pages/user/RegisterResult')
      }
    ]
  },
  {
    path: '/404',
    meta: {
      ignoreAuth: true,
      title: '404'
    },
    component: () => import(/* webpackChunkName: "fail" */ '@/pages/NotFound')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      ignoreAuth: false,
      title: '工作台'
    },
    component: resolve => require(['@/pages/HomePage'], resolve)
  }
]
