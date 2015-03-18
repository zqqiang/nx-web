var express = require('express');
var S = require('string');
var _ = require('underscore');
var router = express.Router();
var Models = require('../model/models');

router.get('/', function(req, res) {
	var Model = Models['Stock'];
	Model.find({}, null, {}, function(err, models) {
		if (err) console.error(err);
		console.log('match count: ', models.length);
		var data = [];
		_.each(_.sortBy(models, 'date'), function(elem) {
			var date = (new Date(elem.date)).getTime();
			data.push([date, elem.open]);
		});
		res.json(data);
	});
});

module.exports = router;