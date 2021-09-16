import { OPERLOG, LOGINLOG } from '@/services/api'
import { request, METHOD } from '@/utils/request'

// OperLog
export async function getOperLogList (parameter) {
  return request(OPERLOG + 'list', METHOD.GET, parameter)
}

// 删除操作日志
export async function delOperlog (operId) {
  return request(OPERLOG + operId, METHOD.DELETE)
}

// 清空操作日志
export async function cleanOperlog () {
  return request(OPERLOG + 'clean', METHOD.DELETE)
}

// 导出操作日志
export async function exportOperlog (query) {
  return request(OPERLOG + 'export', METHOD.POST, query, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// LoginLog
export async function getLoginLogList (parameter) {
  return request(LOGINLOG + 'list', METHOD.GET, parameter)
}

// 删除登录日志
export async function delLogininfor (infoId) {
  return request(LOGINLOG + infoId, METHOD.DELETE)
}

// 清空登录日志
export async function cleanLogininfor () {
  return request(LOGINLOG + 'clean', METHOD.DELETE)
}

// 导出登录日志
export function exportLogininfor (query) {
  return request(LOGINLOG + 'export', METHOD.POST, query, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
