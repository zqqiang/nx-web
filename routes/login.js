var express = require('express');
var router = express.Router();
var debug = require('debug')('routes:login');

router.post('/', function(req, res) {
    debug(req.body);
    res.json({
        result: 'success'
    });
});

module.exports = router;
