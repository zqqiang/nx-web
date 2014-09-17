require(
	[
		'backbone', 'handlebars', 'jquery', 'app', 'views/layout', 'views/navbar', 'views/menu', 'router',
		'views/editor', 'views/table', 'views/dummy', 'models/session'
	],
	function(
		Backbone, Handlebars, $, app, Layout, Navbar, Menu, Router,
		Editor, Table, Dummy, SessionModel
	) {
		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		var contextMap = {
			"Editors": Editor,
			"Table": Table,
			"HighCharts": Dummy,
			"3d": Dummy,
			"other": Dummy,
		};

		app.navigateTo = function(context, options) {
			app.layout.content.show(new contextMap[context](options));
		};

		app.addInitializer(function(options) {
			app.router = new Router();
			app.session = new SessionModel();

			app.addRegions({
				navbarRegion: '#navbar-region',
				mainRegion: "#main-region",
			});

			app.navbarRegion.show(new Navbar());

			app.session.checkAuth({
				complete: function() {
					Backbone.history.start();
				}
			});
		});
	}
);