// define(['marionette', 'templates/compiled'], function(Marionette, JST) {
var Marionette = require('backbone.marionette');
var HeaderHbs = require('../templates/header.html');

var Header = Marionette.ItemView.extend({
	template: HeaderHbs,
	className: 'main-header',
	initialize: function() {

	},
});
module.exports = Header;
// });