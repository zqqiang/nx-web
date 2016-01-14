var $ = require('jquery');
var Marionette = require('backbone.marionette');
var ControlPanelHbs = require('../templates/controlPanel.html');

var ControlPanel = Marionette.ItemView.extend({
	template: ControlPanelHbs,
	className: 'control-panel',
	onShow: function() {
		var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
		var window_height = $(window).height();
		$(".content-wrapper, .right-side").css('min-height', window_height - neg);
	}
});

module.exports = ControlPanel;