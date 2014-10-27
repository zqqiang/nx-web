var express = require('express');
var router = express.Router();
var Modules = require('../model/models');

router.use(function(req, res, next) {
	console.log('originalUrl: ', req.originalUrl);
	console.log('method: ', req.method);
	next();
});

router.get('/:model', function(req, res) {
	console.log('model: ', req.params.model);
	
	var Model = Modules[req.params.model];
	Model.find(function(err, models) {
		if (err) console.error(err);
		res.json(models);
	});
});

router.post('/:model', function(req, res) {
	console.log('model: ', req.params.model);
	console.log('body: ', req.body);

	var Model = Modules[req.params.model];
	Model.create(req.body, function(err, model) {
		if (err) console.error(err);
		res.json(model);
	});
});

router.put('/:model/:id', function(req, res) {
	console.log('model: ', req.params.model);
	console.log('id: ', req.params.id);
	console.log('body: ', req.body);

	var Model = Modules[req.params.model];
	Model.findOneAndUpdate({
		_id: req.params.id
	}, req.body, function(err, model) {
		if (err) console.error(err);
		res.json(model);
	});
});

router.delete('/:model/:id', function(req, res) {
	console.log('model: ', req.params.model);
	console.log('id: ', req.params.id);

	var Model = Modules[req.params.model];
	Model.remove({
		_id: req.params.id
	}, function(err) {
		if (err) console.error(err);
		res.json({
			affected: true
		});
	});
});

module.exports = router;