//login.js
//获取应用实例
let app  =getApp();
Page({
    data:{
        remind:'加载中',
        angle:0,
        userInfo:{}
    },
    goToIndex:function () {
        wx.switchTab({
            url:'/pages/food/index'
        })
    }
})