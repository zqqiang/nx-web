// define(['marionette', 'templates/compiled', 'jquery.easing', 'jquery.fittext'], function(Marionette, JST) {
var Marionette = require('backbone.marionette');
var $ = require('jquery');
// var JST = require('../../templates/compiled.js');

var Creative = Marionette.ItemView.extend({
	template: '<div>Creative</div>',
	className: 'creative',
	ui: {
		'more': 'a.page-scroll'
	},
	events: {
		'click @ui.more': 'clickMore'
	},
	onShow: function() {
		// this.$el.find('h1').fitText(
		// 	1.2, {
		// 		minFontSize: '35px',
		// 		maxFontSize: '65px'
		// 	}
		// );
		// Initialize WOW.js Scrolling Animations
		new WOW().init();
	},
	clickMore: function(event) {
		$('html, body').animate({
			scrollTop: (this.$el.find('#about').offset().top)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	}
});

module.exports = Creative;
// });