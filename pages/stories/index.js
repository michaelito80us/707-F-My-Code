// pages/stories/index.js
const app = getApp()
// this means that i am calling the app.js file 

Page({

  /**
   * Page initial data
   */
  data: {


  },

  onLoad: function (options) {

  },

  onShow: function () {
    const page = this
    wx.request({

      url: `${getApp().globalData.baseUrl}/stories`,
      success(res){
        console.log(res.data)
        page.setData(res.data)
      }
    })
  },
  navigateToStoryShow(e){
    wx.navigateTo({
      url: `/pages/stories/show?id=${e.mark.id}`,
    })
  }
})