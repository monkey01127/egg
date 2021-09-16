import { CODE, LOGIN, TOKEN, ROUTES, INFO } from '@/services/api'
import { request, METHOD, removeAuthorization } from '@/utils/request'

/**
 * 登录服务
 * @param name 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function login (username, password, code, uuid) {
  return request(LOGIN, METHOD.POST, {
    username: username,
    password: password,
    code: code,
    uuid: uuid
  })
}
/**
 * @Author: lijuan.sun
 * @description: code 交换token
 * @param {*} ticket
 * @return {*}
 */
export async function exchangeToken (ticket) {
  return request(TOKEN, METHOD.POST)
}

export async function getCodeImg () {
  return request(CODE + '?r=' + new Date().getTime(), METHOD.GET)
}

export async function getInfo () {
  return request(INFO, METHOD.GET)
}

export async function getRoutesConfig () {
  return request(ROUTES, METHOD.GET)
}

/**
 * 退出登录
 */
export async function logout () {
  localStorage.removeItem(process.env.VUE_APP_ROUTES_KEY)
  localStorage.removeItem(process.env.VUE_APP_PERMISSIONS_KEY)
  localStorage.removeItem(process.env.VUE_APP_ROLES_KEY)
  localStorage.removeItem(process.env.VUE_APP_USER_KEY)
  sessionStorage.removeItem(process.env.VUE_APP_TBAS_KEY)
  removeAuthorization()
}
