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

		var skip = S(business.name).between('(', ')');
		business.name = S(business.name).strip('(' + skip + ')');

		var filename = 'image_' + business.business_id;
		tool.saveImage(business.photo_url, './public/data/images/', filename);
		business.photo_url = '/data/images/' + filename;

		filename = 's_image_' + business.business_id;
		tool.saveImage(business.s_photo_url, './public/data/images/', filename);
		business.s_photo_url = '/data/images/' + filename;

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

function getBusinesses(category, city, page) {
	var params = {};
	params['category'] = category;
	params['city'] = city;
	params['limit'] = "40";
	params['page'] = page;

	var sign = tool.getSign(params);

	var url = 'http://api.dianping.com/v1/business/find_businesses?' +
		'appkey=721651879' +
		'&sign=' + sign +
		'&category=' + escape(utf8.encode(params['category'])) +
		'&city=' + escape(utf8.encode(params['city'])) +
		'&limit=40' +
		'&page=' + page;

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
				console.log('count: ', payload.count);
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

console.log(process.argv);

var argv = process.argv;

getBusinesses(argv[2], argv[3], argv[4]);