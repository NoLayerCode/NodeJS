var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Cool, Dude!', condition: true, anArray: [1, 2, 4] });
});

router.get('/test/:id', function(req, res, next) {
    res.render('test', { output: req.params.id });
});

module.exports = router;