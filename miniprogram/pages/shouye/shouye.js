// miniprogram/pages/shouye/shouye.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    logged: false,
    avatarUrl: 'user-unlogin.png',
    xh: null,
    username:null,
    password: null,
    gh1: '',
    mm1: '',
    isChecked: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  onGetUserInfo: function (e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        this.setData({username:res.result.openid})
        console.log(this.data.username)
        // this.data.username = res.result.openid
        wx.showToast({
          title: '用户识别成功！',
          icon: 'none',
          duration: 2000
        })
        app.appData.userip=res.result.openid
      },
      fail: err => {
        wx.showToast({
          title: '用户识别失败！',
          icon: 'none',
          duration: 2000
        })
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },

  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // var that = this;
    // wx.getStorage({
    //   key: 'gh',
    //   success: function (res) {
    //     console.log(res.data)
    //     that.setData({
    //       gh1: res.data
    //     })
    //   }
    // })
    // wx.getStorage({
    //   key: 'mm',
    //   success: function (res) {
    //     console.log(res.data)
    //     that.setData({
    //       mm1: res.data
    //     })
    //   }
    // })
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

  },
  loginBtnClick: function () {
    if (this.data.username == null) {
      wx.showToast({
        title: '请点击头像识别用户',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.cloud.init({
        env: 'sjk-666',
        traceUser: true
      });
      const db = wx.cloud.database();
      db.collection('yhxx').where({_id:this.data.username}).get({
        success:res =>{
        console.log(res.data);
        if (res.data[0].mm == this.data.password) {
          console.log("登录成功")
            wx.switchTab({
              url: '/pages/zhuye/zhuye'
            })
          app.appData.userinfo = { 
            username: this.data.username, password: this.data.password ,touxiang:this.data.avatarUrl}
          }
        else{
            wx.showToast({
              title: '用户名或密码错误',
              icon: 'none',
              duration: 2000
            })
          }
        },


      })
      // db.collection('yhxx').where({
      //   id: this.data.username
      // }).get().then(res => {
      //   console.log(res.data);
      //   if (res.data[0].mm == this.data.password) {
      //     console.log("登录成功");
      //     this.setData({ xh: res.data[0].xh })
      //     wx.switchTab({
      //       url: '../wd/wd',
      //     })
      //     app.appData.userinfo = { username: this.data.username, password: this.data.password }
      //   }
      //   else {
      //     wx.showToast({
      //       title: '用户名或密码错误',
      //       icon: 'none',
      //       duration: 2000
      //     })
      //   }

      // })
    }
  },
  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
  },
  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  },
  djzcan: function () {
    if (this.data.username == null) {
      wx.showToast({
        title: '请点击头像识别用户',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.navigateTo({ url: '../zc/zc?&avatarUrl='+ this.data.avatarUrl })
    }
  }
})
  
