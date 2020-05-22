//app.js
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function (options) {
    const { scene, referrerInfo } = options
    this.getUserSource(scene)
    this.getUserAppId(referrerInfo)
  },
  onShow: function (options) {

  },
  onHide: function () {

  },
  onError: function (msg) {

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function (options) {

  },
  /* 获取用户来源 */
  getUserSource: function (scene) {
    let { sceneName } = this.globalData
    switch (scene) {
      case 1020:
        sceneName = '公众号 profile 页相关小程序列表'
        break;
      case 1035:
        sceneName = '公众号自定义菜单'
        break;
      case 1036:
        sceneName = 'App 分享消息卡片'
        break;
      case 1037:
        sceneName = '小程序打开小程序'
        break;
      case 1038:
        sceneName = '从另一个小程序返回'
        break;
      case 1043:
        sceneName = '公众号模板消息'
        break;
      default:
        sceneName = '直接进入'
        break;
    }
  },
  /* 设置用户 appId */
  getUserAppId: function (referrerInfo) {
    if (referrerInfo && referrerInfo.appId) {
      let { appId } = this.globalData
      appId = referrerInfo.appId
    }
  },
  globalData: {
    userInfo: '',
    openId: '',
    sceneName: '',
    appId: '',
    cartNum: 0
  }
});