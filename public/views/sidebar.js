var $ = require('jquery');
var Marionette = require('backbone.marionette');
var SidebarHbs = require('../templates/sidebar.html');
require('slimscroll');

var Sidebar = Marionette.ItemView.extend({
	template: SidebarHbs,
	tagName: 'section',
	className: 'sidebar',
	onShow: function() {
		$(".sidebar").slimScroll({
			destroy: true
		}).height("auto");
	}
});

module.exports = Sidebar;