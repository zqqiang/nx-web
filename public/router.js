define(
	[
		'backbone', 'app', 'views/menu', 'views/navbar', 'views/layout', 'views/login'
	],
	function(Backbone, app, Menu, Navbar, Layout, Login) {
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
					app.navbarRegion.show(new Navbar());

					app.layout = new Layout();
					app.mainRegion.show(app.layout);

					app.menu = new Menu();
					app.layout.menu.show(app.menu);
				} else {
					app.login = new Login();
					app.mainRegion.show(app.login);
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