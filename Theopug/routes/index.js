var express = require('express');
var router = express.Router();
var paesModule = require('./paes');

/* GET home page. */
router.get('/', function(req, res, next) {
  const paes = Object.values(paesModule.paes);
  res.render('index', { title: 'Padaria Theo', paes: paes });
});

module.exports = router;
