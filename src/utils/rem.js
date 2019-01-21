// 本文件是为了文档自动转化 font-size 根据 clientWidth。
// 应用本文件，需要在入口文件 main.js 中引入
(function (documents, windows) {
  let domElement = documents.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let setRem = function () {
    let clientWidth = domElement.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 750) {
      domElement.style.fontSize = '100px'
    } else {
      domElement.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }
  }

  if (!documents.addEventListener) return
  setRem()
  windows.addEventListener(resizeEvt, setRem, false)
  documents.addEventListener('DOMContentLoaded', setRem, false)
})(document, window)
