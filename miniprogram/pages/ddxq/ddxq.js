// miniprogram/pages/ddxq/ddxq.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tcid:null,
    ddxq:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       this.setData({
         tcid:options.tcid
       })
    const db = wx.cloud.database({
      env: 'sjk-666'
    })
    db.collection('ddxq').where({
      tcid: this.data.tcid
    }).get(
      {
        success: res => {
          this.setData({
            ddxq: res.data
          })
          console.log(this.data.ddxq[0])
        },

      })
      if(this.data.ddxq == [])
      {
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
  cancelbtn:function(){
    var that=this;
    const db = wx.cloud.database({
      env: 'sjk-666'
    })
    wx.showModal({
      title: '删除',
      content: '确认删除订单',
      showCancel: true,
      success(res) {
        if (res.confirm) {
          console.log('确认取消订单')
          wx.cloud.callFunction({
            name:'deletedd',
            data:{
              crid:that.data.tcid//作用域，this在闭包里面，需要用that传递一下
            },
            success(res){
              console.log("传入的", that.data.tcid)
              console.log("返回", res.result.tcid)
              console.log('调用成功')
              console.log('取消成功')
              wx.navigateBack({
                delta:1
              })
            }
          })
          // db.collection('ddxq').doc(
           
          //    tcid:'123'
           
          // ).remove({
          //   success: res => {
          //     console.log('yes')
          //     wx.showToast({
          //       title: '取消成功',
          //     })
          //     wx.navigateBack({
          //       delta:1
          //     })
          //   }, fail: res => {
          //   }
          // })
          // db.collection('ddxq').where({
          //   tcid:'1'
          // }).remove({
          //   success: res => {
          //     wx.showToast({
          //       title: '取消成功',
          //     })
          //     wx.navigateBack({
          //       delta:1
          //     })
          //   }
          // })
        }
      }
    })
  },
cancel:function(){
  wx.navigateBack({
    delta:1
  })
}
})