var parser = require('packet').createParser();

var parseMessageElement = function(message, elementLength) {
	parser.extract('x128, b8[5] => messageElement', function(element) {
		console.log(element);
		parseTlv(element.messageElement);
	});
	parser.parse(message);
}

var parseTlv = function(tlv) {
	parser.extract('x16, b16 => length', function(tlvObj) {
		parseTlvValue(tlv, tlvObj.length);
	});
	parser.parse(tlv);
}

var parseTlvValue = function(tlv, length) {
	parser.extract('b16 => type, b16 => length, b8[' + length + '] => value', function(tlv) {
		console.log(tlv);
	});
	parser.parse(tlv);
}

var parsePreamble = function(preamble) {
	parser.extract('b8{b4 => version, b4 => type}', function(preamble) {
		console.log(preamble);
	});
	parser.parse(preamble);
}

var parseHeader = function(header) {
	parser.extract('b56{b5 => headerLength, b5 => radioId, b5 => wirelessBindId, b9 => headerFlags, b16 => fragmentId, b13 => fragmentOffset, b3 => reserved}', function(header) {
		console.log(header);
	});
	parser.parse(header);
}

var parseControlHeader = function(message, controlHeader) {
	parser.extract('b32 => messageType, \
					b8 => sequneceNumber, \
					b16 => messageElementLength, \
					b8 => flags', function(controlHeader) {
		console.log(controlHeader);
		parseMessageElement(message, controlHeader.messageElementLength);
	});
	parser.parse(controlHeader);
}

exports.parse = function(message) {
	parser.extract('b8[1] => preamble, \
		            b8[7] => header, \
		            b8[8] => controlHeader', function(capwap) {
		console.log(capwap);
		parsePreamble(capwap.preamble);
		parseHeader(capwap.header);
		parseControlHeader(message, capwap.controlHeader);
	});
	parser.parse(message);
}