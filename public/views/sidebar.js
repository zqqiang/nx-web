define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Sidebar = Marionette.ItemView.extend({
		template: JST.SidebarTemplate,
		tagName: 'section',
		className: 'sidebar'
	});
	return Sidebar;
});