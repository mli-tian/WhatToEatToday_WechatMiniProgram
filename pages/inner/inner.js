// pages/inner/inner.js
var app = getApp()
var config = require("../index/config.js")

Page({
  data: {
    dish:null,
    keyword:null,
    level:0,
    breakfast:false,
    lunch:false,
    dinner:false,
    imageurl:null,
    introduce:null
  },
  onLoad:function(option){
    var that = this;
    var number = 0;
    var levelnum = 0;
    number=parseInt(option.num);
    levelnum=parseInt(option.level);
    console.log(option)
    that.setData({
      dish:option.dish,
      keyword:option.keyword,
      level:levelnum
    })
    for(var i = 1;i<=config.dishesObjects.length;i++){
      if(i==number){
        that.setData({
          breakfast : config.dishesObjects[i-1].breakfast,
          lunch :　config.dishesObjects[i-1].lunch,
          dinner : config.dishesObjects[i-1].dinner,
          imageurl : config.dishesObjects[i-1].imageurl,
          introduce : config.dishesObjects[i-1].introduce
          })
      }
    }
  }
})