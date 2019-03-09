// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    messages: [
      {
        "content": "消息一",
      },
      {
        "content": "消息二",
      },
      {
        "content": "消息三",
      }
    ],
    tasks:[
      {
        "taskTitle":"任务一",
        "taskDeadline":"20xx-xx-xx xx:xx",
      },
      {
        "taskTitle": "任务二",
        "taskDeadline": "20xx-xx-xx xx:xx",
      },
      {
        "taskTitle": "任务三",
        "taskDeadline": "20xx-xx-xx xx:xx",
      }
    ]
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

  },
  // 页面跳转
  toMessage:function(){
    wx.navigateTo({
      url: '../process/messageList/message',
    })
  },
  toTask: function () {
    wx.navigateTo({
      url: '../process/taskList/task',
    })
  }
})