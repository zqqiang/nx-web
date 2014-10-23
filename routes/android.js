var express = require('express');
var mongoose = require('../db/db');
var router = express.Router();

router.use(function(req, res, next) {
	console.log(req.originalUrl);
	console.log(req.method);
	next();
});

router.use('/', function(req, res) {
	var Cat = mongoose.model('Cat', {
		name: String
	});

	var kitty = new Cat({
		name: 'Zildjian'
	});

	kitty.save(function(err) {
		if (err) {
			console.log(err);
		} else {
			res.json({
				message: 'insert kitty success!'
			});
			console.log('suceess');
		}
	});
});

module.exports = router;