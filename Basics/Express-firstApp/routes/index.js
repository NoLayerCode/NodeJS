var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Cool, Dude!', condition: false, anArray: [1, 2, 4] });
});

module.exports = router;