(function(app) {
	var navbarTemplate = [
		'<div>',
		'<div class="container-fluid">',
		'<div class="navbar-header">',
		'<a class="navbar-brand" href="#">Brand</a>',
		'</div>',
		'</div>',
		'</div>',
	];

	app.navbarView = Marionette.ItemView.extend({
		template: navbarTemplate.join(''),
	});

	app.addRegions({
		navbarRegion: '#navbar-region',
	});

	app.addInitializer(function(options) {
		app.navbarRegion.show(new app.navbarView());
	});

})(Application);