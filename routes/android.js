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

	var start = req.query.start ? req.query.start : 1;
	var size = req.query.size ? req.query.size : 40;

	var lat = req.query.lat;
	var lon = req.query.lon;
	var minDistance = req.query.minDistance;
	var maxDistance = req.query.maxDistance;

	var find = {};

	var filter = null;
	if (req.query.filter) {
		console.log('filter: ', S(req.query.filter).replaceAll(',', ' ').s);
		filter = S(req.query.filter).replaceAll(',', ' ').s;
	}

	if (req.query.find) {
		var findArray = S(req.query.find).parseCSV(',', null);
		for (var i = 0; i + 1 < findArray.length; i += 2) {
			find[findArray[i]] = findArray[i + 1];
		}
	}

	console.log('start: ', start);
	console.log('size: ', size);
	console.log('lat: ', lat);
	console.log('lon: ', lon);
	console.log('find: ', find);

	var Model = Modules[model];

	if (lat && lon && minDistance && maxDistance) {
		var minSet = [];
		var maxSet = [];

		Model.where('loc').near({
			center: [lon, lat],
			maxDistance: minDistance,
			spherical: true
		}).find({}, function(err, models) {
			if (err) console.error(err);
			minSet = models;
		});

		Model.where('loc').near({
			center: [lon, lat],
			maxDistance: maxDistance,
			spherical: true
		}).find({}, function(err, models) {
			if (err) console.error(err);
			maxSet = models;
			console.log('min: ', minSet.length);
			console.log('max: ', maxSet.length);
			res.json(_.difference(maxSet, minSet));
		});
	} else {
		Model.find(find, filter, {
			skip: (start - 1) * size,
			limit: size
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