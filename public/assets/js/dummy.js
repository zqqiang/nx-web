(function(app) {
	var dummyTemplate = [
		'<div class="alert alert-danger" role="alert">Errors! Coming soon...</div>',
	];

	app.DummyView = Marionette.ItemView.extend({
		template: dummyTemplate.join(''),
	});
})(Application);