define(
	[
		'backbone', 'app', 'views/menu', 'views/navbar', 'views/layout', 'views/login', 'views/panel'
	],
	function(Backbone, app, Menu, Navbar, Layout, Login, Panel) {
		var Router = Backbone.Router.extend({
			routes: {
				"": "index",
				"Editors": "showEditors",
				"Table": "showTable",
				"HighCharts": "showHighCharts",
				"3d": "show3d",
				"*other": "defaultRouter",
			},
			index: function() {
				if (app.session.get('logged_in')) {
					app.layout = new Layout();
					app.mainRegion.show(app.layout);

					app.menu = new Menu();
					app.layout.menu.show(app.menu);
				} else {
					app.mainRegion.show(new Panel());
				}
			},
			showEditors: function() {
				app.navigateTo("Editors");
			},
			showTable: function() {
				app.navigateTo("Table");
			},
			showHighCharts: function() {
				app.navigateTo("HighCharts");
			},
			show3d: function() {
				app.navigateTo("3d");
			},
			defaultRouter: function(other) {
				app.navigateTo("other");
			}
		});
		return Router;
	}
);