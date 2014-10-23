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

	Cat.create(req.body, function(err, cat) {
		if (err) console.error(err);
		res.json(cat);
	});
});

router.put('/:id', function(req, res) {
	console.log('body: ', req.body);
	console.log('id: ', req.params.id);

	Cat.findOneAndUpdate({
		_id: req.params.id
	}, req.body, {}, function(err) {
		if (err) console.error(err);
		// req.json(cat);
		req.json({
			message: 'success',
		});
	});
});

module.exports = router;