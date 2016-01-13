var Marionette = require('backbone.marionette');
var SidebarHbs = require('../templates/sidebar.html');
// require('jquery-slimscroll');

var Sidebar = Marionette.ItemView.extend({
	template: SidebarHbs,
	tagName: 'section',
	className: 'sidebar',
	onShow: function() {
		this.$el.find(".sidebar").slimScroll({
			destroy: true
		}).height("auto");
	}
});

module.exports = Sidebar;