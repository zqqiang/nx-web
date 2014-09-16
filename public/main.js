require(
	[
		'backbone', 'handlebars', 'jquery', 'app', 'views/layout', 'views/navbar', 'views/menu', 'router',
		'views/editor', 'views/table', 'views/dummy'
	],
	function(
		Backbone, Handlebars, $, app, Layout, Navbar, Menu, Router,
		Editor, Table, Dummy
	) {
		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		app.router = new Router();

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
			app.addRegions({
				navbarRegion: '#navbar-region',
				mainRegion: "#main-region",
			});

			app.navbarRegion.show(new Navbar());

			app.layout = new Layout();
			app.mainRegion.show(app.layout);

			app.menu = new Menu();
			app.layout.menu.show(app.menu);

			Backbone.history.start();
		});
	}
);