define(
	[
		'backbone', 'app', 'views/menu', 'views/navbar', 'views/layout'
	],
	function(Backbone, app, Menu, Navbar, Layout) {
		var Router = Backbone.Router.extend({
			routes: {
				"": "showIndex",
				"Login": "showLogin",
				"Editors": "showEditors",
				"Table": "showTable",
				"DianpingTuan": "showDianpingTuan",
				"HighCharts": "showHighCharts",
				"3d": "show3d",
				"*other": "defaultRouter",
			},
			showIndex: function() {
				app.navigateTo("");
			},
			showEditors: function() {
				app.navigateTo("Editors");
			},
			showTable: function() {
				app.navigateTo("Table");
			},
			showDianpingTuan: function() {
				app.navigateTo("DianpingTuan");
			},
			showHighCharts: function() {
				app.navigateTo("HighCharts");
			},
			show3d: function() {
				app.navigateTo("3d");
			},
			showLogin: function() {
				app.navigateTo("Login");
			},
			defaultRouter: function(other) {
				app.navigateTo("other");
			}
		});
		return Router;
	}
);