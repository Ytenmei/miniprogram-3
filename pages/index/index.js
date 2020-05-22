//index.js
//获取应用实例
import { getHomeData, getShoppingCartCount } from '../../api/index.js'
const app = getApp()

//Page Object
Page({
  data: {
    bannerList: [],
    gridList: [],
    goodsList: [],
    page: 1,
    indicator_dots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userId: wx.getStorageSync('userId')
  },
  //options(Object)
  onLoad: function (options) {
    this.getGoodsList()
    this.getSwiperList()
    this.getGridList()
  },
  onShow: function () {
    this.getCartNum()
  },
  /* 1.专题广告 2.产品广告 3.店铺广告 4.链接广告 */
  handleBindClick: function (e) {
    const { type, href, name } = e.currentTarget.dataset.item
    if (type == 2) {
      wx.navigateTo({
        url: `/pages/goods_detail/index?pid=${href}`
      })
    } else if (type == 1) {
      wx.navigateTo({
        url: `/pages/activeList/index?activeId=${href}&title=${name}`
      })
    }
  },
  /* 1.专题广告 2.产品广告 3.店铺广告 4.链接广告 */
  handleGoodsList: function (e) {
    const { category, id, title } = e.currentTarget.dataset.item
    if (category == 2) {
      wx.navigateTo({
        url: `/pages/details/index?pid=${id}`
      })
    } else if (category == 1) {
      wx.navigateTo({
        url: `/pages/activeList/index?activeId=${id}&title=${title}`,
      })
    }
  },
  getCartNum: function () {
    const { userId } = this.data
    if (userId.length) {
      const orderJson = { sUserId: userId }
      this.getShoppingCartCount(orderJson)
    } else {
      this.removeTabBarBadge()
    }

  },
  getSwiperList: async function () {
    const data = await getHomeData({ type: '1' })
    this.setData({
      bannerList: data
    })
  },
  getGridList: async function () {
    const data = await getHomeData({ type: '2' })
    this.setData({
      gridList: data
    })
  },
  getGoodsList: async function () {
    const data = await getHomeData({ type: '3' })
    this.setData({
      goodsList: data
    })
  },
  getShoppingCartCount: async function (orderJson) {
    const data = await getShoppingCartCount(orderJson)
    if (data != 0 && data) {
      wx.setTabBarBadge({
        index: 1,
        text: data
      })
      app.globalData.cartNum = data
    } else {
      this.removeTabBarBadge()
    }
  },
  removeTabBarBadge: function () {
    wx.removeTabBarBadge({
      index: 1
    })
  }
});