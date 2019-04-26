var $ = require('jquery');
var Marionette = require('backbone.marionette');
var EcommerceHbs = require('../templates/ecommerce.html');

var Ecommerce = Marionette.ItemView.extend({
	template: EcommerceHbs,
	className: 'container ecommerce',
	onShow: function() {
		var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
		var window_height = $(window).height();
		$(".content-wrapper, .right-side").css('min-height', window_height - neg);
	}
});

module.exports = Ecommerce;