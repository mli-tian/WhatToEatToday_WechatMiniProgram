//pages/map/map.js
// 引入腾讯地图SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'IVGBZ-H3U3P-FHUDD-L2Z63-E2H7F-QEFCM' // 必填
});

Page({
  onLoad: function () {
      // 实例化API核心类
      qqmapsdk = new QQMapWX({
          key: 'IVGBZ-H3U3P-FHUDD-L2Z63-E2H7F-QEFCM'
      });
  },
  // 事件触发，调用接口
  nearby_search:function(){
    var _this = this;
    // 调用接口
    qqmapsdk.search({
      keyword: '美食',  //搜索关键词
      location : '34.781799,113.662514',
      success: function (res) { //搜索成功后的回调
        var mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude : res.data[i].location.lat,
            longitude : res.data[i].location.lng,
            iconPath: "../../images/icon/sit1.png", //图标路径
            width: 20,
            height: 20
          })
        }
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res){
        console.log(res);
      }
  });
  }
})
