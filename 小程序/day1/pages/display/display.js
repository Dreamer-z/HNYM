// display.js
//获取应用实例
const app = getApp();

Page({
  data: {
    starX:"",
    starY:"",
    nowX:"",
    nowY:"",
    ctx:"",
  },
  //事件处理函数
  onReady:function(){
    this.ctx = wx.createCanvasContext('test');
    this.ctx.setStrokeStyle('blue');
    this.ctx.setLineWidth(40);
    this.ctx.setLineCap("round");
  },
  touchs: function (e) {
    this.starX = e.touches[0].pageX;
    this.starY = e.touches[0].pageY;
    this.ctx.moveTo(this.starX, this.starY); 
    this.ctx.lineTo(this.starX, this.starY); 
    this.ctx.stroke();
    this.ctx.draw();
  },
  touchm:function (e) {
    var that = this;
    this.ctx.save();
    this.d(this,e);
  },
  touche: function (e) {
  },
  d: function (that, e) {
    // that.ctx.beginPath();
    that.nowX = e.touches[0].pageX;
    that.nowY = e.touches[0].pageY;
    that.ctx.moveTo(that.nowX, that.nowY);
    that.ctx.lineTo(that.nowX, that.nowY);
    that.ctx.stroke();
    that.ctx.restore();
    that.ctx.draw();
    // that.ctx.closePath();
  },
})