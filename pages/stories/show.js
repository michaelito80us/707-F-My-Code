// pages/stories/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  onLoad: function (options) {
    console.log(options)
    this.setData({
      options
    })
  },


  onShow: function () {
    const page = this
    wx.request({
      url: `${getApp().globalData.baseUrl}/stories/${page.data.options.id}`,
      success(res) {
        page.setData(res.data)
      }
    })
  },

  deleteStory() {
    const page = this
    wx.showModal({
      title: "Delete story?",
      confirmText: "Yes",
      cancelText: "No",
      success(res) {
        if (res.confirm) {

          wx.request({
            url: `${getApp().globalData.baseUrl}/stories/${page.data.options.id}`,
            method: 'DELETE',
            success(res) {
              wx.showToast({
                icon: 'none',
                title: `${res.data.message}`,
                success() {
                  setTimeout(page.switchToIndex, 500)
                }
              })

            }
          })
        }
      }
    })
  },
  switchToIndex() {
    wx.switchTab({
      url: '/pages/stories/index',
    })
  }

})