var mongoose = require('../db/db');

require('../model/business.js')();
require('../model/account.js')();
require('../model/stock.js')();

var Models = {
	Business: mongoose.model('Business'),
	Account: mongoose.model('Account'),
	Stock: mongoose.model('Stock'),
};

module.exports = Models;