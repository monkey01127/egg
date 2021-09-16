import { SYSROLE, SYSDEPT } from '@/services/api'
import { request, METHOD } from '@/utils/request'

// 查询角色列表
export async function listRole (query) {
  return request(SYSROLE + 'list', METHOD.GET, query)
}

export async function getRoleDeptIds (roleId) {
  return request(SYSDEPT + 'role/' + `${roleId}`, METHOD.GET)
}

export async function getDeptList (parameter) {
  return request(SYSDEPT + 'list', METHOD.GET, parameter)
}

export async function roleDeptTreeselect (roleId) {
  return request(SYSDEPT + 'roleDeptTreeselect/' + roleId, METHOD.GET)
}

// 新增角色
export async function addRole (data) {
  return request(SYSROLE, METHOD.POST, data)
}

// 角色数据权限
export async function dataScope (data) {
  return request(SYSROLE + 'dataScope', METHOD.PUT, data)
}

// 角色状态修改
export async function changeRoleStatus (roleId, status) {
  const data = {
    roleId,
    status
  }
  return request(SYSROLE + 'changeStatus', METHOD.PUT, data)
}

// 删除角色
export async function delRole (roleId) {
  return request(SYSROLE + roleId, METHOD.DELETE)
}

export async function saveRole (parameter) {
  return request(SYSROLE, METHOD.POST, parameter)
}

export async function saveEditRole (parameter) {
  return request(SYSROLE, METHOD.PUT, parameter)
}
