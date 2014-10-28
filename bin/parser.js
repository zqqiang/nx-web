var http = require('http');
var cheerio = require('cheerio');

var options = {
	hostname: 'www.dianping.com',
	path: '/search/category/2/30/g139',
	headers: {
		'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36'
	}
};

var req = http.request(options, function(res) {
	// console.log('STATUS: ' + res.statusCode);
	// console.log('HEADERS: ' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data', function(chunk) {
		console.log('BODY: ' + chunk);
		var $ = cheerio.load(chunk);
		console.log($('a[class="shopname"]').attr('title'));
	});
});

req.on('error', function(e) {
	console.log('problem with request: ' + e.message);
});

req.end();