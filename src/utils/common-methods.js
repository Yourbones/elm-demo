/**
 * 存储 localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content) // 当content不是字符串时，调用方法转化为json格式
  }
  window.localStorage.setItem(name, content) // 存入浏览器的localStorage
}

/**
 * 获取 localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除 localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
