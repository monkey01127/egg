import { request, METHOD } from '@/utils/request'

const downloadUrl = '/system/common/download'

const mimeMap = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  zip: 'application/zip',
  xml: 'application/xml'
}

export async function exportExcel (url, params, filename) {
  request(url, METHOD.POST, params).then(res => {
    const content = res.data
    const blob = new Blob([content])
    if ('download' in document.createElement('a')) {
      const elink = document.createElement('a')
      elink.download = filename
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href)
      document.body.removeChild(elink)
    } else {
      navigator.msSaveBlob(blob, filename)
    }
  })
}

/**
 * 下载.xlsx文件
 * @param {String} filename 文件名
 */
export async function downloadXlsx (filename) {
  request(
    downloadUrl,
    METHOD.POST,
    { fileName: filename, delete: true },
    { responseType: 'blob' }
  ).then(res => {
    resolveBlob(res, mimeMap.xlsx)
  })
}

/**
 * 代码生成并下载为zip
 * @param {String} url 链接
 * @param {String} tables 表名
 */
export async function genCodeZip (url, tables) {
  request(url, METHOD.GET, { tables: tables }, { responseType: 'blob' }).then(
    res => {
      resolveBlob(res, mimeMap.zip)
    }
  )
}

/**
 * 解析blob响应内容并下载
 * @param {*} res blob响应内容
 * @param {String} mimeType MIME类型
 */
export function resolveBlob (res, mimeType) {
  const aLink = document.createElement('a')
  var blob = new Blob([res.data], { type: mimeType })
  // //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;
  var patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*')
  var contentDisposition = decodeURI(res.headers['content-disposition'])
  var result = patt.exec(contentDisposition)
  var fileName = result[1]
  aLink.href = URL.createObjectURL(blob)
  aLink.setAttribute('download', fileName) // 设置下载文件名称
  document.body.appendChild(aLink)
  aLink.click()
  document.body.removeChild(aLink)
  window.URL.revokeObjectURL(aLink.href)
}

/**
 * 参数处理
 * @param {*} params  参数
 */
export function tansParams (params) {
  let result = ''
  Object.keys(params).forEach(key => {
    if (
      !Object.is(params[key], undefined) &&
      !Object.is(params[key], null) &&
      !Object.is(JSON.stringify(params[key]), '{}')
    ) {
      result +=
        encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
    }
  })
  return result
}

// 通用下载方法
export function download (url, params, filename) {
  request(url, METHOD.POST, params, {
    transformRequest: [
      params => {
        return tansParams(params)
      }
    ],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    responseType: 'blob'
  })
    .then(data => {
      const content = data.data
      const blob = new Blob([content])
      if ('download' in document.createElement('a')) {
        const elink = document.createElement('a')
        elink.download = filename
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href)
        document.body.removeChild(elink)
      } else {
        navigator.msSaveBlob(blob, filename)
      }
    })
    .catch(r => {
      console.error(r)
    })
}
