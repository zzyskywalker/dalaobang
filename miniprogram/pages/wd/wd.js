// pages/wd/wd.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:null,
    nickname:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.setData({
          avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/mhTHRCsohKk7ZyTh2sNjwM8gZ0iay5tR7d99mUREjicoUdLGnjqeEQ9gswxvNb43Q4gV2fTkB9cUZNTmk8c1MFzQ/132",
          nickname:"老大"
        })
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