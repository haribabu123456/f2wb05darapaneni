var express = require('express');
var router = express.Router();

/* GET Earbuds page. */
router.get('/', function(req, res, next) {
  res.render('earbuds', { title: 'Search Results Earbuds' });
});
module.exports = router;