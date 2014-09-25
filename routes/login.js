var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
	if ('admin' === req.body.username && 'pass' === req.body.password) {
		res.json({
			message: 'auth check success!'
		});
	} else {
		res.statusCode = 401;
		res.json({
			message: 'auth check failed!'
		});
	}
});

module.exports = router;