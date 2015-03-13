var express = require('express');
var S = require('string');
var _ = require('underscore');
var router = express.Router();

router.get('/', function(req, res) {
	var data = [
		['2015-03-05', 13.50, 13.53, 13.29, 13.38, 82860400, 13.38],
		['2015-03-04', 13.62, 13.72, 13.50, 13.57, 81497300, 13.57],
		['2015-03-03', 13.98, 13.98, 13.59, 13.60, 105947600, 13.60],
		['2015-03-02', 14.03, 14.09, 13.87, 14.03, 101879700, 14.03]
	];

	_.each(data, function(elem) {
		elem[0] = (new Date(elem[0])).getTime();
	});

	res.json(data);
});

module.exports = router;