var $ = require('jquery');
var Marionette = require('backbone.marionette');
var ReactContextHbs = require('../templates/reactContext.html');
var React = require('react');
var ReactDOM = require('react-dom');

var ReactContext = Marionette.ItemView.extend({
	template: ReactContextHbs,
	className: 'react',
	onShow: function() {
		var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
		var window_height = $(window).height();
		$(".content-wrapper, .right-side").css('min-height', window_height - neg);

		ReactDOM.render(
			<div>Hello, React World!</div>,
			document.getElementById('react-content')
		);
	}
});

module.exports = ReactContext;