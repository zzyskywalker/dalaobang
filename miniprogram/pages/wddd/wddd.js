// miniprogram/pages/wddd/wddd.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ddxx: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const db = wx.cloud.database({
      env: 'sjk-666'
    })
    db.collection('ddxq').where({
      _id:app.appData.userip
    }).get(
      {
        success: res => {
          this.setData({
            ddxx: res.data
          })
        },
        fail: res => {
          wx.showToast({
            title: '获取数据失败！',
            icon: 'none',
            duration: 2000
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})