var express = require('express');
var router = express.Router();
var dbHelper = require('../db/dbHelper');
var formidable = require('formidable');
var entries = require('../db/jsonRes');
var fs = require('fs');
var request = require('request');

/* GET home page. */
router.get('/student', function(req, res, next) {
  dbHelper.findUsrInfo(req, function (success, data) {
    //console.log(data.friends);
    res.render('student', {
      user:data,
      scriptData:JSON.stringify(data)
    });
  })
});
router.get('/teacher', function(req, res, next) {
  dbHelper.findUsrInfo(req, function (success, data) {
    //console.log(data.friends);
    res.render('teacher', {
      user:data,
      scriptData:JSON.stringify(data)
    });
  })
});

module.exports = router;
