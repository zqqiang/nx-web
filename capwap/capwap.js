var dgram = require('dgram');
var capwap = dgram.createSocket('udp4');
var decoder = require('./decoder');

capwap.on('listening', function() {
	var address = capwap.address();
	console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

capwap.on('message', function(message, remote) {
	console.log(remote.address + ':' + remote.port + ' - ' + 'message len [' + message.length + ']');
	decoder.parse(message);
});

module.exports = capwap;