var express = require('express');
var router = express.Router();

var mongodb = require('../db/db');

router.use(function(req, res, next) {
	console.log(req.originalUrl);
	console.log(req.method);
	next();
});

router.get('/', function(req, res) {
	mongodb.open(function(err, db) {
		if (err) {
			console.log('open mongodb failed!');
			return;
		}

		var collection = db.collection('Android');
		
		collection.find({}).toArray(function(err, docs) {
			if (err) {
				res.json({
					error: 'collection find failed!'
				});
			} else {
				res.json(docs);
			}
		});
	});
});

module.exports = router;