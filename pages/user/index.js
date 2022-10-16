//pages/user/index.js
const util = require("../../utils/util");
//获取应用实例
const app = getApp()
let globalData = app.globalData;

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    cityName: '', //当前城市名
    weatherInfo: {},//天气信息
    lifeList: [] //生活指数列表
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.init();
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  init() {
    if (app.globalData.cityId) {
      this.setData({
        [location]: app.globalData.cityId,
        cityName: app.globalData.cityName
      })
    }
    this.getWeather();
  },
  getWeather() {//获取今日天气
    wx.showLoading({
      title: '加载中',
    })
    let that = this;
    let params = {};
    Object.assign(params, {
      key: globalData.key,
      location:globalData.cityId,
    });
    util.requestAjax.get('https://devapi.qweather.com/v7/weather/now', params)
      .then((res) => {
        wx.hideLoading();
        if (res.data.code != 200) {
          return
        }
        that.setData({
          weatherInfo: res.data.now
        })
      })
    that.getLifeList(params);
  },//生活指数
  getLifeList(params) {
    let that = this;
    Object.assign(params, {type: 0});
    util.requestAjax.get('https://devapi.qweather.com/v7/indices/1d', params)
      .then((res) => {
        if (res.data.code != 200) {
          return
        }
        that.setData({
          lifeList: res.data.daily
        })
      })
  },
  toCustomMenu: function () {
    wx.navigateTo({
      url: '../menu/menu'
    })
  },
  toPie: function () {
    wx.navigateTo({
      url: '../pie/pie'
    })
  },
  toMap: function () {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  toAbout: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  }
})

