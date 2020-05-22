import { getProList } from "../../api/activeList"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function (options) {
    const { activeId, title } = options
    this.getActiveName()
    this.getProList()
  },
  onShow: function () {

  },
  getProList: async function () {
    const data = await getProList()
  },
  getActiveName: function () {
    
  }
})