var $ = require('jquery');
var Marionette = require('backbone.marionette');
var QuickStartHbs = require('../templates/quickstart.html');
var React = require('react');
var ReactDOM = require('react-dom');

var QuickStart = Marionette.ItemView.extend({
	template: QuickStartHbs,
	className: 'quickstart',
	onShow: function() {
		var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
		var window_height = $(window).height();
		$(".content-wrapper, .right-side").css('min-height', window_height - neg);

		ReactDOM.render(
 		  <h1>Hello, world!</h1>,
 		  document.getElementById('quick-start')
 		);
	}
});

module.exports = QuickStart;