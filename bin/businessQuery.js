/*
 Get business from www.dianping.com 
 */

var http = require('http');
var fs = require('fs');
var tool = require('./tools');
var _ = require('underscore');
var async = require('async');
var mongoose = require('mongoose');
var utf8 = require('utf8');
var S = require('string');

require('../model/business.js')();

function processPayload(businesses) {
	for (var i = 0; i < businesses.length; ++i) {
		var business = businesses[i];

		// var skip = S(business.name).between('(', ')');
		// business.name = S(business.name).strip('(' + skip + ')');

		business.loc = {};
		business.loc.type = 'Point';
		business.loc.coordinates = [business.longitude, business.latitude];
	}
};

function saveToDb(businesses) {
	var Business = mongoose.model('Business');
	mongoose.connect('mongodb://localhost/test', function(err) {
		if (err) throw err;
		Business.on('index', function(err) {
			if (err) throw err;
			async.each(businesses, function(item, cb) {
				Business.create(item, cb);
			}, function(err) {
				if (err) throw err;
				console.log('async create finished!');
				mongoose.disconnect();
			});
		});
	});
};

/*
	category: query from category.json
	city: 
	region: query from region.json
*/

function getBusinesses(category, city, region, page) {
	var params = {};
	params['category'] = category;
	params['city'] = city;
	params['region'] = region;
	params['limit'] = "40";
	params['page'] = page;

	var sign = tool.getSign(params);

	// var oldAppKey = '721651879';
	var appKey = '591602686';

	var url = 'http://api.dianping.com/v1/business/find_businesses?' +
		'appkey=' + appKey +
		'&sign=' + sign +
		'&category=' + escape(utf8.encode(params['category'])) +
		'&city=' + escape(utf8.encode(params['city'])) +
		'&region=' + escape(utf8.encode(params['region'])) +
		'&limit=40' +
		'&page=' + page;

	console.log('url [%s]', url);

	var req = http.get(url, function(res) {
		var bodyChunk = '';

		res.on('data', function(chunk) {
			bodyChunk += chunk;
		});

		res.on('end', function() {
			var payload = JSON.parse(bodyChunk);

			if ('ERROR' === payload.status) {
				console.log('errorCode: ', payload.error.errorCode);
				console.log('errorMessage: ', payload.error.errorMessage);
			} else {
				console.log('total count: ', payload.total_count);
				console.log('page [%s] count: ', page, payload.count);
				processPayload(payload.businesses);
				saveToDb(payload.businesses);
			}
		});
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	req.end();
};

console.log('input argv is {%s}, count [%d]', process.argv, process.argv.length);

var argv = process.argv;

if (argv.length != 5) console.error('input parameters is category + city + region + page!');

getBusinesses(argv[2], argv[3], argv[4], argv[5]);