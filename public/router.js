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
				"Dianping": "showDianping",
				"Dashboard": "showDashboard",
				"HighCharts": "showHighCharts",
				"3d": "show3d",
				"SignIn": "showSignIn",
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
			showDianping: function() {
				app.navigateTo("Dianping");
			},
			showDashboard: function() {
				app.navigateTo("Dashboard");
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
			showSignIn: function() {
				app.navigateTo("SignIn");
			},
			defaultRouter: function(other) {
				app.navigateTo("other");
			}
		});
		return Router;
	}
);