// pages/index/getBack.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clearInput: "",
    phoneValue: "",
  },
  clearInput: function (e) {
    let that = this;
    console.log("查看输入的值");
    console.log(e);
    console.log(e.currentTarget.dataset.name);
    console.log(e.detail.value);
    let inputName = e.currentTarget.dataset.name;
    let inputValue = e.detail.value;
    console.log(inputName === "phone");
    if (inputName === "phone") {
      that.setData({
        phoneValue: inputValue,
      });
    } else if (inputName === "password") {
      that.setData({
        passwordValue: inputValue,
      });
    };
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

  }
})