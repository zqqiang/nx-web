var express = require('express');
var router = express.Router();
var Modules = require('../model/models');
var _ = require('underscore');
var S = require('string');
var tool = require('../bin/tools');

router.use(function(req, res, next) {
	console.log('originalUrl: ', req.originalUrl);
	console.log('method: ', req.method);
	next();
});

router.get('/:model/:id', function(req, res) {
	var id = req.params.id;
	console.log('id: ', id);

	var model = req.params.model;
	console.log('model: ', model);

	var Model = Modules[model];

	Model.findOne({
		_id: id,
	}, function(err, model) {
		if (err) console.error(err);
		res.json(model);
	});
});

router.get('/:model', function(req, res) {
	var model = req.params.model;
	console.log('model: ', model);

	var start = req.query.start;
	var size = req.query.size;

	var lat = req.query.lat;
	var lon = req.query.lon;
	var radius = req.query.radius;

	var filter = null;
	if (req.query.filter) {
		console.log('filter: ', S(req.query.filter).replaceAll(',', ' ').s);
		filter = S(req.query.filter).replaceAll(',', ' ').s;
	}

	console.log('start: ', start);
	console.log('size: ', size);

	var Model = Modules[model];

	if (lat && lon && radius) {
		console.log('radius [%s]', radius);
		var radiusArray = S(radius).parseCSV(',', null)

		console.log(radiusArray);

		Model.find({}, filter,
			function(err, models) {
				if (err) console.error(err);
				var matchModels = [];
				for (var i = 0; i < models.length; ++i) {
					var latM = models[i].businesses[0].latitude;
					var lonM = models[i].businesses[0].longitude;
					var latU = lat;
					var lonU = lon;

					var distance = tool.getDistance(latM, lonM, latU, lonU);
					// console.log('distance: [%d] km', distance);
					if (distance >= radiusArray[0] && distance < radiusArray[1]) {
						console.log('match distance: [%d] km', distance);
						matchModels.push(models[i]);
					}
				}
				console.log('matchModels.length: [%d]', matchModels.length);
				res.json(matchModels);
			});
	} else if (start && size) {
		Model.find({}, filter, {
				skip: (start - 1) * size,
				limit: size
			},
			function(err, models) {
				if (err) console.error(err);
				res.json(models);
			});
	} else {
		Model.count({}, function(err, count) {
			console.log('count [%d]', count);
			if (err) console.error(err);
			if (count > 40) console.error('more than 40 items, just return first 40');
		});

		Model.find({}, filter, {
			limit: 40
		}, function(err, models) {
			if (err) console.error(err);
			res.json(models);
		});
	}
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