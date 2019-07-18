/**
* 错误捕获
*/
async function errorCaptured (asyncFunc) {
  try {
    let res = await asyncFunc()
    return [null, res]
  } catch (e) {
    return [e, null]
  }
}
