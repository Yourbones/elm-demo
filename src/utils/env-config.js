/**
 * 编译环境配置
 * 方便开发环境与生产环境进行切换
 *
 * baseUrl：域名地址
 * routerMode：路由模式(hash模式与history模式)
 * imgBaseUrl；图片所在域名地址
 */

let baseUrl = ''
let routerMode = 'history'
let imgBaseUrl = ''

if (process.env.NODE_ENV === 'development') {
  imgBaseUrl = '/img/'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = ''
  imgBaseUrl = '' // 暂时为空
}

export {
  baseUrl,
  imgBaseUrl,
  routerMode
}
