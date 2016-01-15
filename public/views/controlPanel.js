var $ = require('jquery');
var Marionette = require('backbone.marionette');
var ControlPanelHbs = require('../templates/controlPanel.html');
require('bootstrap');

var ControlPanel = Marionette.ItemView.extend({
	template: ControlPanelHbs,
	className: 'control-panel',
	ui: {
		'left': 'a.left',
		'right': 'a.right'
	},
	events: {
		'click @ui.left': 'clickLeft',
		'click @ui.right': 'clickRight'
	},
	onShow: function() {
		var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
		var window_height = $(window).height();
		$(".content-wrapper, .right-side").css('min-height', window_height - neg);
	},
	clickLeft: function() {
		$('.carousel').carousel('prev');
	},
	clickRight: function() {
		$('.carousel').carousel('next');
	}
});

module.exports = ControlPanel;