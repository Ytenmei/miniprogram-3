const http = ({ actionName, method = "POST", data }) => {
  /* 测试 */
  var apiUrl = 'https://testwxmall.yufu.cn/api/MiniProgram/'
  /* 生产 */
  // var apiUrl = 'https://wxmall.yufu.cn/api/MiniProgram/'
  return new Promise(resolve => {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: apiUrl + actionName,
      data: JSON.stringify(data),
      method: method,
      success: function (res) {
        wx.hideLoading()
        const { data, code} = res.data
        if (code === 200) {
          resolve(data)
        }
      },
      fail: function () {
        wx.hideLoading();
        wx.showToast({
          title: res.errMsg,
          icon: 'none',
          duration: 2000
        })
      }
    })
  })
}
export default http
