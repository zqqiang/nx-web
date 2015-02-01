define(
	[
		'backbone', 'app', 'views/menu', 'views/navbar', 'views/layout'
	],
	function(Backbone, app, Menu, Navbar, Layout) {
		var Router = Backbone.Router.extend({
			routes: {
				"": "showIndex",
				"Editors": "showEditors",
				"Table": "showTable",
				"Dianping": "showDianping",
				"Dashboard": "showDashboard",
				"HighCharts": "showHighCharts",
				"3d": "show3d",
				"SignIn": "showSignIn",
				"Homepage": "showHomepage",
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
			showSignIn: function() {
				app.navigateTo("SignIn");
			},
			showHomepage: function() {
				app.navigateTo("Homepage");
			},
			defaultRouter: function(other) {
				app.navigateTo("other");
			}
		});
		return Router;
	}
);