var drawClock = function(){

  var canvas = document.getElementById("myCanvas");
  var c = canvas.getContext("2d");
  var w = canvas.width;
  var h = canvas.height;
  var center = {x : w / 2 - 3, y : h / 2 + 3};
  var lw = canvas.width * 0.8 / 2; // draw Area width.
  // initialize variables.
  c.fillStyle = "green";
  c.strokeStyle = "green";
  c.font = "18px 'ＭＳ Ｐゴシック'";

  // clear canvas.
  c.clearRect(0, 0, w, h);

  // draw numbers


    var i_12 = 0 
    var radian = (360 / 12) * i_12 * Math.PI / 180;
    var x = center.x + lw * Math.sin(radian);
    var y = center.y - lw * Math.cos(radian);
    var text = "12";
    // alert(text + ", " + x + ", " + y);
    c.fillText(text, x, y);

    var i_1 = 1 
    var radian = (360 / 12) * i_1 * Math.PI / 180;
    var x = center.x + lw * Math.sin(radian);
    var y = center.y - lw * Math.cos(radian);
    var text = i_1;
    // alert(text + ", " + x + ", " + y);
    c.fillText(text, x, y);

    var i_2 = 2 
    var radian = (360 / 12) * i_2 * Math.PI / 180;
    var x = center.x + lw * Math.sin(radian);
    var y = center.y - lw * Math.cos(radian);
    var text = i_2;
    // alert(text + ", " + x + ", " + y);
    c.fillText(text, x, y);
  

    var i_3 = 3 
    var radian = (360 / 12) * i_3 * Math.PI / 180;
    var x = center.x + lw * Math.sin(radian);
    var y = center.y - lw * Math.cos(radian);
    var text = i_3;
    // alert(text + ", " + x + ", " + y);
    c.fillText(text, x, y);
  

    var i_4 = 4 
    var radian = (360 / 12) * i_4 * Math.PI / 180;
    var x = center.x + lw * Math.sin(radian);
    var y = center.y - lw * Math.cos(radian);
    var text = i_4;
    // alert(text + ", " + x + ", " + y);
    c.fillText(text, x, y);
  

    var i_5 = 5 
    var radian = (360 / 12) * i_5 * Math.PI / 180;
    var x = center.x + lw * Math.sin(radian);
    var y = center.y - lw * Math.cos(radian);
    var text = i_5;
    // alert(text + ", " + x + ", " + y);
    c.fillText(text, x, y);
  

    var i_6 = 6 
    var radian = (360 / 12) * i_6 * Math.PI / 180;
    var x = center.x + lw * Math.sin(radian);
    var y = center.y - lw * Math.cos(radian);
    var text = i_6;
    // alert(text + ", " + x + ", " + y);
    c.fillText(text, x, y);
  

    var i_7 = 7 
    var radian = (360 / 12) * i_7 * Math.PI / 180;
    var x = center.x + lw * Math.sin(radian);
    var y = center.y - lw * Math.cos(radian);
    var text = i_7;
    // alert(text + ", " + x + ", " + y);
    c.fillText(text, x, y);
  

    var i_8 = 8 
    var radian = (360 / 12) * i_8 * Math.PI / 180;
    var x = center.x + lw * Math.sin(radian);
    var y = center.y - lw * Math.cos(radian);
    var text = i_8;
    // alert(text + ", " + x + ", " + y);
    c.fillText(text, x, y);
  

    var i_9 = 9 
    var radian = (360 / 12) * i_9 * Math.PI / 180;
    var x = center.x + lw * Math.sin(radian);
    var y = center.y - lw * Math.cos(radian);
    var text = i_9;
    // alert(text + ", " + x + ", " + y);
    c.fillText(text, x, y);
  

    var i_10 = 10 
    var radian = (360 / 12) * i_10 * Math.PI / 180;
    var x = center.x + lw * Math.sin(radian);
    var y = center.y - lw * Math.cos(radian);
    var text = i_10;
    // alert(text + ", " + x + ", " + y);
    c.fillText(text, x, y);


    var i_11 = 11 
    var radian = (360 / 12) * i_11 * Math.PI / 180;
    var x = center.x + lw * Math.sin(radian);
    var y = center.y - lw * Math.cos(radian);
    var text = i_11;
    // alert(text + ", " + x + ", " + y);
    c.fillText(text, x, y);

  // draw needles.
  var now = new Date();
  var hh = now.getHours() -0.7;
  var mm = now.getMinutes();
  var ss = now.getSeconds();
  var hh_radian = (360 * hh / 12 + (360 / 12) * (mm / 60)) * Math.PI / 180;
  var mm_radian = (360 * mm / 60 + (360 / 60) * (ss / 60)) * Math.PI / 180;
  var ss_radian = (360 * ss / 60) * Math.PI / 180;

  var pos_h = _calcPoint(center, lw, hh_radian);
  var pos_m = _calcPoint(center, lw, mm_radian);
  var pos_s = _calcPoint(center, lw, ss_radian);

  // hour
  c.beginPath();
  c.moveTo(center.x, center.y);
  c.lineTo(pos_h.x * 0.8, pos_h.y * 0.8);
  c.stroke();
  
  // minute
  c.beginPath() ;
  c.moveTo(center.x, center.y);
  c.lineTo(pos_m.x, pos_m.y);
  c.stroke();

  // second
  c.strokeStyle = "blue";
  c.beginPath();
  c.moveTo(center.x, center.y);
  c.lineTo(pos_s.x, pos_s.y);
  c.stroke();

}

var _calcPoint = function(center, lineWidth, radian) {
  var pos = {x : center.x + lineWidth * Math.sin(radian), y : center.y - lineWidth * Math.cos(radian)};
  return pos;
}

window.addEventListener("load", function(){
  setInterval(drawClock, 1000);
}, false);


window.addEventListener("load", function() {
  $("#submit").on("click", function() {
    var canvas = document.getElementById("myCanvas");
    $("#myCanvas").remove();
  });
});


