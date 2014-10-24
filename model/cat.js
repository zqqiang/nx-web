var mongoose = require('../db/db');

var Cat = mongoose.model('Cat', {
	name: String
});

module.exports = Cat;