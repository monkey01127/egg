import { SYSMENU } from '@/services/api'
import { request, METHOD } from '@/utils/request'

// 查询菜单列表
export async function listMenu (query) {
  return request(SYSMENU + 'list', METHOD.GET, query)
}

// 查询菜单下拉树结构
export async function treeselect () {
  return request(SYSMENU + 'treeselect', METHOD.GET)
}

// 根据角色ID查询菜单下拉树结构
export async function roleMenuTreeselect (roleId) {
  return request(SYSMENU + 'roleMenuTreeselect/' + roleId, METHOD.GET)
}

// 新增菜单
export async function addMenu (data) {
  return request(SYSMENU, METHOD.POST, data)
}

// 删除菜单
export async function delMenu (menuId) {
  return request(SYSMENU + menuId, METHOD.DELETE)
}

export async function saveMenu (parameter) {
  return request(SYSMENU, METHOD.POST, parameter)
}

export async function saveEditMenu (parameter) {
  return request(SYSMENU, METHOD.PUT, parameter)
}
