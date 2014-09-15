require(
	[
		'backbone', 'handlebars', 'jquery', 'app', 'views/layout', 'views/navbar', 'views/menu', 'router',
		'views/editor', 'views/table'
	],
	function(Backbone, Handlebars, $, app, Layout, Navbar, Menu, Router,
		Editor, Table) {
		Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
			// use Handlebars.js to compile the template
			console.log(rawTemplate);
			return Handlebars.compile(rawTemplate);
		}

		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		app.router = new Router();

		var contextMap = {
			"Editors": Editor,
			"Table": Table,
			"HighCharts": app.DummyView,
			"3d": app.DummyView,
			"other": app.DummyView,
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