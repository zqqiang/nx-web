var $ = require('jquery');
var Marionette = require('backbone.marionette');
var DummyHbs = require('../templates/dummy.html');

var Dummy = Marionette.ItemView.extend({
	template: DummyHbs,
	onShow: function() {
		var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
		var window_height = $(window).height();
		$(".content-wrapper, .right-side").css('min-height', window_height - neg);
	}
});

module.exports = Dummy;