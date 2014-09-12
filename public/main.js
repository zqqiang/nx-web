require(
	['backbone', 'handlebars', 'jquery', 'app', 'views/layout', 'views/navbar', 'views/menu', 'router'],
	function(Backbone, Handlebars, $, app, Layout, Navbar, Menu, Router) {
		Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
			// use Handlebars.js to compile the template
			return Handlebars.compile(rawTemplate);
		}

		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		app.router = new Router();

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