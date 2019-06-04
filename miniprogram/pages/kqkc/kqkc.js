// miniprogram/pages/kqkc/kqkc.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
       kc:null,
       zy:null,
       nj:null,
       sj:null,
       xc:null,
       ms:null,
       qq:null
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
  bindkeyinput1:function(e){
    this.setData({
      kc:e.detail.value
    })
  },
  bindkeyinput2: function (e) {
    this.setData({
      zy: e.detail.value
    })
  },
  bindkeyinput3: function (e) {
    this.setData({
      nj: e.detail.value
    })
  },
  bindkeyinput4: function (e) {
    this.setData({
      sj: e.detail.value
    })
  },
  bindkeyinput5: function (e) {
    this.setData({
      xc: e.detail.value
    })
  },
  bindkeyinput6: function (e) {
    this.setData({
      ms: e.detail.value
    })
  },
  bindkeyinput7: function (e) {
    this.setData({
      qq: e.detail.value
    })
  },
  add:function(){
    if (this.data.kc == null) {
      wx.showModal({
        title: '课程为空',
        content: '请输入所要讲授的课程',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
    if (this.data.zy == null) {
      wx.showModal({
        title: '专业为空',
        content: '请输入您所在的专业',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
    if (this.data.nj == null) {
      wx.showModal({
        title: '年级为空',
        content: '请输入您在的年级',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
    if (this.data.sj == null) {
      wx.showModal({
        title: '时间为空',
        content: '请输入您的空闲时间',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
    if (this.data.xc == null) {
      wx.showModal({
        title: '薪酬为空',
        content: '请输入您的薪酬',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
    if (this.data.qq == null) {
      wx.showModal({
        title: '联系方式为空',
        content: '请输入您的联系方式',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
    if(this.data.kc != null &&
    this.data.zy != null &&
    this.data.nj != null &&
    this.data.sj != null &&
    this.data.xc != null &&
    this.data.qq != null ){
    const db=wx.cloud.database({
      env:'sjk-666'
    })
   db.collection('kcxx').add({

     data:{
       _id:app.appData.userip,
       kc:this.data.kc,
       zy:this.data.zy,
       nj:this.data.nj,
       sj:this.data.sj,
       xc:this.data.xc,
       ms:this.data.ms,
       qq:this.data.qq
     },
     success:res=>{
       console.log(res.data)
       wx.navigateBack({
         delta:1
       })
     },fali:res=>{
       console.error("error")
     }
   }) 
   }
  },
back:function(){
  wx.navigateBack({
    delta:1
  })
}
})