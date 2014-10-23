var express = require('express');
var mongoose = require('../db/db');
var router = express.Router();

var Cat = mongoose.model('Cat', {
	name: String
});

router.use(function(req, res, next) {
	console.log('originalUrl: ', req.originalUrl);
	console.log('method: ', req.method);
	next();
});

router.get('/', function(req, res) {
	Cat.find(function(err, cats) {
		if (err) console.error(err);
		res.json(cats);
	});
});

router.post('/', function(req, res) {
	console.log('body: ', req.body);
	console.log('body.name: ', req.body.name);

	var kitty = new Cat(req.body);
	kitty.save(function(err) {
		if (err) {
			console.error(err);
		} else {
			Cat.find({
				name: req.body.name
			}, function(err, cat) {
				if (err) console.error(err);
				res.json(cat);
			});
		}
	});
});

module.exports = router;