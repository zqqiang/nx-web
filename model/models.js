var mongoose = require('../db/db');

require('../model/business.js')();

var Models = {
	Business: mongoose.model('Business'),
};

module.exports = Models;