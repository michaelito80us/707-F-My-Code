// pages/stories/new.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  formSubmit(e){

    console.log(e)
    const name = e.detail.value.name
    const text = e.detail.value.text

    app.globalData.stories.push({name: name, text: text})
    // simple way to push a post to the stories array in globalData

    wx.switchTab({
      url: "/pages/stories/index",
    })

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})