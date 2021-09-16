// 跨域代理前缀
const API_PROXY_PREFIX = '/prod-api'
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_API_BASE_URL
    : API_PROXY_PREFIX
// const BASE_URL = process.env.VUE_APP_API_BASE_URL

module.exports = {
  // !CODE、与LOGIN 接口在接入SSO登录后，并未使用
  CODE: `${BASE_URL}/auth/code`,
  LOGIN: `${BASE_URL}/auth/login`,
  TOKEN: `${BASE_URL}/getToken`,
  ROUTES: `${BASE_URL}/system/menu/getRouters`,
  INFO: `${BASE_URL}/system/user/getInfo`,
  DICT: `${BASE_URL}/system/dict/data/type`,
  OPERLOG: `${BASE_URL}/system/operlog/`,
  LOGINLOG: `${BASE_URL}/system/logininfor/`,
  SYSUSER: `${BASE_URL}/system/user/`,
  SYSROLE: `${BASE_URL}/system/role/`,
  SYSMENU: `${BASE_URL}/system/menu/`,
  SYSDEPT: `${BASE_URL}/system/dept/`
}
