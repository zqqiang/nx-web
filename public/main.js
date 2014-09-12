require(['backbone', 'handlebars', 'jquery', 'app', 'layout'], function(Backbone, Handlebars, $, app, Layout) {
	Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
		// use Handlebars.js to compile the template
		return Handlebars.compile(rawTemplate);
	}

	$(document).ready(function() {
		app.start({
			msg: "start up"
		});
	});

	app.addInitializer(function(options) {
		app.addRegions({
			mainRegion: "#main-region",
		});
		app.mainRegion.show(new Layout());
	});
});