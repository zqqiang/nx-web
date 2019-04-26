var express = require('express');
var router = express.Router();
var Models = require('../model/models');
var async = require('async');

router.get('/', function(req, res) {
	var Model = Models['Business'];

	async.map([{}, {
		city: '北京'
	}, {
		city: '深圳'
	}], function(item, cb) {
		Model.count(item, cb);
	}, function(err, results) {
		if (err) console.error(err);
		res.json({
			all_count: results[0],
			beijing_count: results[1],
			shenzhen_count: results[2],
		});
	});
});

module.exports = router;