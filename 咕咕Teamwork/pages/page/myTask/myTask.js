// pages/page/myTask/myTask.js
Page({

  /**
   * Page initial data
   */
  data: {
    name:"name1",
    taskTitle:"任务",
    taskDeadline:"20xx-xx-xx xx:xx"
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
  addTask:function(){
    wx.navigateTo({
      url: '../../process/taskList/add/add',
    })
  },
  toTask:function(){
    wx.navigateTo({
      url: '../../process/taskList/task',
    })
  }
})