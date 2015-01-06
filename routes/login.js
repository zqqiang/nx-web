var express = require('express');
var router = express.Router();
var Models = require('../model/models');

router.get('/', function(req, res) {
	var auth = req.headers['authorization'];
	var result = auth.match(/(\w+):(\w+)/);

	var username = result[1];
	var password = result[2];

	console.log('username[%s], password[%s]', username, password);

	var Model = Models['Account'];

	Model.findOne({
		user: username,
	}, function(err, model) {
		if (err) console.error(err);
		if (model) {
			if (password !== model.password) {
				res.statusCode = 401;
			}
		} else {
			res.statusCode = 401;
		}
		res.json({});
	});
});

module.exports = router;