var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	// res.json({
	// 	id: 1,
	// 	username: 'admin',
	// 	name: 'admin',
	// 	email: 'admin@qq.com'
	// });

	res.statusCode = 401;
	res.json({
		message: 'auth check failed!'
	});
});

module.exports = router;