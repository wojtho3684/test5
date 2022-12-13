var express = require('express');
var calc = express.Router();
var calculator = require('../calculator');

calc.get('/add/:a([+-]?\\d+)/:b([+-]?\\d+)', function(req, res, next) {

  var a = parseInt(req.params.a);
  var b = parseInt(req.params.b);
  var s = calculator.add(a,b);
  res.render('calc', { title: 'MiniCalc', a:a, b:b, s:s });
});

module.exports = calc;