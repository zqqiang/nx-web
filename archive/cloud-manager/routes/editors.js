var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.json({
		type: "text",
		label: "Server Text",
		placeholder: "Server Text Editor",
	});
});

module.exports = router;