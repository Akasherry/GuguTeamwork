//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // wx.getStorageSync(key)，获取本地缓存
    var logs = wx.getStorageSync('logs') || []
    // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.windowHeight= res.windowHeight
        that.globalData.windowWidth = res.windowWidth
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://www.fracturesr.xyz/gugu/openIdEntry',
          header: {
            'content-type': "application/x-www-form-urlencoded"
          },
          method: 'POST',
          data: {
            OpenId:"testopenid"
          },
          success: function(res) {
            wx.setStorage({
              key: 'UserInfor',
              data: res.data,
            })
            console.log(res.data)
          },
          fail() {
            console.log("fail")
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              // 设置globalData.userInfo
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
          // 获取本地异步缓存信息
          wx.getStorage({
            key: 'Information',
            success: function(res) {
              console.log("succeeded in get local information")
            },
            // 失败：即本地无当前用户信息
            fail:function(){
              // 向服务器发起POST
              wx.request({
                url: 'https://www.fracturesr.xyz/entry',
                header: {
                  'content-type': "application/x-www-form-urlencoded"
                },
                method: 'POST',
                data:{
                  'code':"res.data"
                },
                success(res) {
                  wx.setStorage({
                    key: 'Information',
                    data: 'res.data',
                  })
                },
                fail(){
                  console.log("fail")
                }

              })
            }
          })
        }else{
          console.log("fail to get infor")
        }
      }
    })
  },
  onLoad: function(){
  
     
  },
  globalData: {
    userInfo: null,
    personal:null,
    userInforComplete:false,
    windowHeight:0,
    windowWidth:0,
    currentTaskIndex:0,
    currentMessageIndex: 0,
    currentTask:{},
    markDownChoice:2,
    tasks:[],
    messages:[],
    color:{
      "Blue":'#88caed',
      'Orange':'#f86e3d'
    }
  }
})