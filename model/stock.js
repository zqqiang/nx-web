// Date,Open,High,Low,Close,Volume,Adj Close
// 2015-03-05,13.50,13.53,13.29,13.38,82860400,13.38

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
	var StockSchema = new Schema({
		date: String,
		open: Number,
		high: Number,
		low: Number,
		close: Number,
		volume: Number,
		adj: Number,
		close: Number,
	});

	mongoose.model('Stock', StockSchema);
};