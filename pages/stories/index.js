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
    const auth = wx.getStorageSync('auth')
    const header = {
      'X-User-Email': auth.email,
      'X-User-Token': auth.token
    }
    wx.request({

      url: `${getApp().globalData.baseUrl}/stories`,
      header,
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