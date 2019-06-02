var app = getApp()
Page({
  data: {
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
    inputValue4: '',
    inputValue5: '',
    inputValue6: '',
    avatarUrl: null,
    usernmae:null
  },
  onLoad: function (options) {
    var that = this
    that.setData({ avatarUrl: options.avatarUrl,
                    username:app.appData.userip
    
     })
  },
  bindKeyInputxh: function (e) {
    this.setData({
      inputValue1: e.detail.value
    })
  },
  bindKeyInputmm: function (e) {
    this.setData({
      inputValue2: e.detail.value
    })
  },
  bindKeyInputnc: function (e) {
    this.setData({
      inputValue3: e.detail.value
    })
  },
  bindKeyInputyx: function (e) {
    this.setData({
      inputValue4: e.detail.value
    })
  },
  bindKeyInputQQ: function (e) {
    this.setData({
      inputValue5: e.detail.value
    })
  },
  addbtn: function () {
    if (this.data.inputValue5 == '') {
      wx.showModal({
        title: 'QQ号为空',
        content: '请输入QQ号',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
    if (this.data.inputValue4 == '') {
      wx.showModal({
        title: '邮箱为空',
        content: '请输入邮箱',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
    if (this.data.inputValue3 == '') {
      wx.showModal({
        title: '昵称为空',
        content: '请输入昵称',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
    if (this.data.inputValue2 == '') {
      wx.showModal({
        title: '密码为空',
        content: '请输入密码',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
    if (this.data.inputValue1 == '') {
      wx.showModal({
        title: '学号为空',
        content: '请输入学号',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });
    }
    if (this.data.inputValue1 != '' &&
      this.data.inputValue2 != '' &&
      this.data.inputValue3 != '' &&
      this.data.inputValue4 != ''&&
      this.data.inputValue5 != '') {

      const db = wx.cloud.database({
        env: 'sjk-666'
      })
     
        db.collection('yhxx').add({
          // data 字段表示需新增的 JSON 数据
          data: {
            // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
            _id: this.data.username,
            avatarUrl: this.data.avatarUrl,
            xh: this.data.inputValue1,
            mm: this.data.inputValue2,
            nc: this.data.inputValue3,
            yx: this.data.inputValue4,
            qq: this.data.inputValue5,
          },
          success(res) {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            console.log(res)
          }
        })
        wx.navigateTo({
          url: '../shouye/shouye',
        })
 
    }
  },
})