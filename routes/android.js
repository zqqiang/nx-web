var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

router.use(function(req, res, next) {
	console.log(req.originalUrl);
	console.log(req.method);
	next();
});

router.get('/', function(req, res) {
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
			console.log('suceess');
		}
	});
});

module.exports = router;