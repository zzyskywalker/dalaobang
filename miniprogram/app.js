//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
    console.log('App Launch')
  },

  onShow: function () {
    console.log('App Show')
  },

  onHide: function () {
    console.log('App Hide')
  },
  appData: {
    userinfo: null,
    userip:null
  },
  zjdata: {
    zjinfo: null
  },
  xh: {
    gh: null
  }
})
