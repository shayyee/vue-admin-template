/** @format */

import Cookies from 'js-cookie'

/*
 * 设置cookies
 * */
export function getCookie(key) {
  return Cookies.get(key)
}
/**
 * 设置Cookies
 * @param {*} key 键
 * @param {*} value 值
 * @param {*} expiresTime 失效时间（ms）
 */
export function setCookie(key, value, expiresTime) {
  let expires = new Date(new Date().getTime() + expiresTime)
  return Cookies.set(key, value, { expires: expires })
}
/*
 * 移除Cookies
 * */
export function removeCookie(key) {
  return Cookies.remove(key)
}
