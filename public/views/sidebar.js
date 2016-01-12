// define(['marionette', 'templates/compiled'], function(Marionette, JST) {
var Marionette = require('backbone.marionette');
var SidebarHbs = require('../templates/sidebar.html');

var Sidebar = Marionette.ItemView.extend({
	template: SidebarHbs,
	tagName: 'section',
	className: 'sidebar'
});

module.exports = Sidebar;
// });