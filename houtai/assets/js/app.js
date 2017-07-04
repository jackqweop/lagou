(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });
})(jQuery);


// var express = require('express');
// var bodyParser = require('body-parser')
// var app = express();
// var mysql = require("mysql");
// var connection;
// var multer = require('multer');
// var http = require("http");
// var fs = require("fs");

// var storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, './uploads')
//   },
 
//   filename: function(req, file, cb) {
//     var fileFormat = (file.originalname).split(".");
//     cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
//   }
// });
// var upload = multer({
//   storage: storage
// });
// function createConnection() {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'test'
//   });
// }

// // app.post('/upload-single', upload.any(), function(req, res, next) {
// //   console.log(req.files)
// //   res.append("Access-Control-Allow-Origin","*");
// //   res.send({
// //     wscats_code: '0',
// //     imgInfo: req.files
// //   });
// // });
// // 
// var server = app.listen(12345, function() {
//   //测试
//   //测试
//   var host = server.address().address
//   var port = server.address().port
//   console.log("应用实例，访问地址为 http://%s:%s", host, port)
// })