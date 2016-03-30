var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/add', function(req, res) {
  var one = req.body.one;
  var two = req.body.two;

  var result = parseFloat(one) + parseFloat(two);

  res.send(result.toString());
});

router.post('/cut', function(req, res) {
  var one = req.body.one;
  var two = req.body.two;

  var result = parseFloat(one) - parseFloat(two);

  res.send(result.toString());
});

router.post('/multiply', function(req, res) {
  var one = req.body.one;
  var two = req.body.two;

  var result = parseFloat(one) * parseFloat(two);

  res.send(result.toString());
});

router.post('/divide', function(req, res) {
  var one = req.body.one;
  var two = req.body.two;

  var result = parseFloat(one) / parseFloat(two);

  res.send(result.toString());
});


router.post('/opposite', function(req, res) {
  var single = req.body.single;

  var result = -parseFloat(single);

  res.send(result.toString());
});

router.post('/percent', function(req, res) {
  var single = req.body.single;

  var result = parseFloat(single) / 100;

  res.send(result.toString());
});

module.exports = router;
