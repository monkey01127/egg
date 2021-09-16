import { SYSUSER, SYSDEPT } from '@/services/api'
import { request, METHOD } from '@/utils/request'
// eslint-disable-next-line no-unused-vars
import { praseStrEmpty } from '@/utils/util'

// 查询用户列表
export async function listUser (query) {
  return request(SYSUSER + 'list', METHOD.GET, query)
}

// 查询用户详细
export async function getUser (data) {
  return request(SYSUSER + 'info', METHOD.POST, data)
}

// 新增用户
export async function addUser (data) {
  return request(SYSUSER, METHOD.POST, data)
}

// 删除用户
export async function delUser (userId) {
  return request(SYSUSER + userId, METHOD.DELETE)
}

// 用户状态修改
export async function changeUserStatus (userId, status) {
  const data = {
    userId,
    status
  }
  return request(SYSUSER + 'changeStatus', METHOD.PUT, data)
}

export async function getDeptListEnable () {
  return request(SYSDEPT + 'treeselect', METHOD.GET)
}
export async function addEditUser (parameter) {
  return request(SYSUSER, METHOD.PUT, parameter)
}
export async function addSaveUser (parameter) {
  return request(SYSUSER, METHOD.POST, parameter)
}
export async function resetPwd (parameter) {
  return request(SYSUSER + 'resetPwd', METHOD.PUT, parameter)
}
