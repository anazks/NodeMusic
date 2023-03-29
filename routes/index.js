var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/music', function(req, res, next) {
  res.render('music');
});
router.get('/Newmusic', function(req, res, next) {
  res.render('newMusic');
});
module.exports = router;
