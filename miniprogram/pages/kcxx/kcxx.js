// miniprogram/pages/kcxx/kcxx.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     id:null,
     kcxx:[],
     qq:null,
     shanchu:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(
      {
        id: options._id,
        shanchu:true
      });


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
    db.collection('kcxx').where({
      _id: this.data.id
    }).get(
      {
        success: res => {
          this.setData({
            kcxx: res.data
          })
          console.log(this.data.kcxx[0])
        },

      })
    if (this.data.kcxx == []) {
      wx.showModal({
        title: '错误',
        content: '数据拉取错误',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateBack({
              delta: 1
            });
          }
        }
      });
    }
    db.collection('yhxx').where({
      _id: this.data.id
    }).get(
      {
        success: res => {
          this.setData({
            qq: res.data[0].qq
          })
          console.log(this.data.qq)
        },

      })
    if (this.data.qq == '') {
      wx.showModal({
        title: '错误',
        content: '数据拉取错误',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateBack({
              delta: 1
            });
          }
        }
      });
    }
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
  addbtn:function(){
    const db = wx.cloud.database({
      env: 'sjk-666'
    })
    db.collection('ddxq').add({
      data:{
    _id:app.appData.userip,
    tcid:this.data.id,
    kc:this.data.kcxx[0].kc,
    sj:this.data.kcxx[0].sj,
    qq:this.data.qq,
    xc:this.data.kcxx[0].xc
    },
    success(){
    console.log("下单成功")
    this.setData(
      {
        shanchu:true
      }
    )
      console.log(shanchu)
      // wx.cloud.callFunction({
      //   name: 'delete',
      //   data:{
      //     crid:this.data.id
      //   },
      //   success(res){console.log('调用成功'),
      //     wx.navigateBack({
      //       delta: 1
      //     }) },
      //     fail(){
      //       console.error('删除云函数调用失败',err)
      //     }
      // })
      },
      fail: err => { 
        wx.showToast({ 
          icon: 'none', title: '新增记录失败' })     
         console.error('[数据库] [新增记录] 失败：', err)
          //  console.log(
          //      app.appData.userip,
          //      this.data.id,
          //      this.data.kcxx[0].kc,
          //  )                   
                              }
      })
      if(this.data.shanchu == true){
    wx.cloud.callFunction({
      name: 'delete',
      data: {
        crid: this.data.id
      },
      success(res) {
        wx.navigateBack({
             delta: 1})
        console.log("shuju", res.result.id)
        console.log('调用成功')
      },
      fail() {
        console.log('shibai')
      }
    })
      }

  },
    cancel:function(){
      wx.navigateBack({
      delta:1
      })
    }
  
})

