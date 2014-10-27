var mongoose = require('../db/db');

var Tour = mongoose.model('Tour', {
	name: String
});

module.exports = Tour;