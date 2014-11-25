/*
 Get business from www.dianping.com 
 */

var http = require('http');
var fs = require('fs');
var Modules = require('../model/models');
var tool = require('./tools');
var _ = require('underscore');

function getBusinesses(page) {
	var params = {};
	params['category'] = "景点郊游";
	params['city'] = "深圳";
	params['limit'] = "40";
	params['page'] = page;

	var sign = tool.getSign(params);

	// console.log('sign [%s]', sign);

	var url = 'http://api.dianping.com/v1/business/find_businesses?' +
		'appkey=721651879' +
		'&sign=7ADF5CA5A595E53CCC8E65B938DEAF7E19BCA147' +
		'&category=%E6%99%AF%E7%82%B9%E9%83%8A%E6%B8%B8' +
		'&city=%E6%B7%B1%E5%9C%B3' +
		'&limit=40' +
		'&page=1';

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

				var Model = Modules['Business'];

				for (var i = 0; i < payload.count; ++i) {
					var business = payload.businesses[i];

					var filename = _.uniqueId('image_');
					tool.saveImage(business.photo_url, './public/data/images/', filename);
					business.photo_url = '/data/images/' + filename;

					filename = _.uniqueId('s_image_');
					tool.saveImage(business.s_photo_url, './public/data/images/', filename);
					business.s_photo_url = '/data/images/' + filename;
				}

				Model.create(payload.businesses, function(err, model) {
					if (err) console.error(err);
				});
			}
		});
	});

	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	req.end();
};

getBusinesses(1);