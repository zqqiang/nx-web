var dgram = require('dgram');
var capwap = dgram.createSocket('udp4');
var parser = require('packet').createParser();

capwap.on('listening', function() {
	var address = capwap.address();
	console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

capwap.on('message', function(message, remote) {
	console.log(remote.address + ':' + remote.port + ' - ' + 'message len [' + message.length + ']');

	parser.extract("b8{b4 => version, b4 => type}, \
		            b56{b5 => headerLength, b5 => radioId, b5 => wirelessBindId, b9 => headerFlags, b16 => fragmentId, b13 => fragmentOffset, b3 => reserved}, \
		            b32 => messageType, \
		            b8 => sequneceNumber, \
		            b16 => messageElementLength, \
		            b8 => flags",
		function(record) {
			console.log(record);
		});
	parser.parse(message);
});

module.exports = capwap;