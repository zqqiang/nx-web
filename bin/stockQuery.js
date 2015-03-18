var http = require('http');
var _ = require('underscore');
var async = require('async');
var mongoose = require('mongoose');
var S = require('string');

require('../model/stock.js')();

function saveToDb(col) {
	console.log('start save to db => col.size[%d]', col.length);
	var Stock = mongoose.model('Stock');
	mongoose.connect('mongodb://localhost/test', function(err) {
		if (err) throw err;
		Stock.create(_.sortBy(col, 'date'), function(err) {
			if (err) throw err;
			console.log('async create finished!');
			mongoose.disconnect();
		});
	});
};

function preprocessStock(col) {
	var result = [];
	_.each(col, function(elem) {
		var item = {};
		item.date = elem[0];
		item.open = elem[1];
		item.high = elem[2];
		item.low = elem[3];
		item.close = elem[4];
		item.volume = elem[5];
		item.adj = elem[6];
		item.close = elem[7];
		result.push(item);
	});

	return result.slice(1, -1);
};

function getStock(id) {
	var url = 'http://table.finance.yahoo.com/table.csv?s=' + id;
	http.get(url, function(res) {
		var data = '';
		res.on('data', function(chunk) {
			data += chunk;
		});
		res.on('end', function() {
			//1991-01-02,67.41,67.41,67.41,67.41,3007100,0.22\n
			var stock = S(data).parseCSV(',', '"', '"', '\n');
			var result = preprocessStock(stock);
			saveToDb(result);
		});
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});
};

console.log('input argv is {%s}, count [%d]', process.argv, process.argv.length);

var argv = process.argv;

if (argv.length != 3) return console.error('input parameters is invalid! eg: node stockQuery.js 000001.sz');

getStock(argv[2]);