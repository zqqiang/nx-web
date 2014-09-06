(function(app) {
	var layoutTemplate = [
		'<div>',
		'<div id="menu" class="col-sm-2"></div>',
		'<div id="content" class="col-sm-10"></div>',
		'</div>',
	];

	var contentLayout = Marionette.Layout.extend({
		template: layoutTemplate.join(''),
		regions: {
			menu: '#menu',
			content: '#content'
		}
	});

	app.addRegions({
		mainRegion: "#main-region",
	});

	app.addInitializer(function(options) {
		var layout = new contentLayout();
		app.mainRegion.show(layout);

		layout.menu.show(new app.MenuView());

		var contextMap = {
			"Editors": app.DummyView,
			"Table": app.TableView,
			"HighCharts": app.DummyView,
			"3d": app.DummyView,
			"other": app.DummyView,
		};

		app.navigateTo = function(context, options) {
			layout.content.show(new contextMap[context](options));
		};
	});

})(Application);