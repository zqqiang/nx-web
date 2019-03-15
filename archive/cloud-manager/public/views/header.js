var $ = require('jquery');
var Marionette = require('backbone.marionette');
var HeaderHbs = require('../templates/header.html');

var screenSizes = {
	xs: 480,
	sm: 768,
	md: 992,
	lg: 1200
}

var Header = Marionette.ItemView.extend({
	template: HeaderHbs,
	className: 'main-header',
	events: {
		'click a.sidebar-toggle': 'clickSidebar'
	},
	clickSidebar: function() {
		if (this.$el.width() > screenSizes.sm - 1) {
			$('body').toggleClass('sidebar-collapse');
		} else {
			$('body').toggleClass('sidebar-open');
		}
	}
});
module.exports = Header;