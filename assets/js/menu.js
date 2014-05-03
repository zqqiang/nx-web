(function(app) {
	var menuTemplate = [
		'<div>',
		'<div>before menu</div>',
		'<div id="start">Menu Tree</div>',
		'<div>Menu div<span>Menu Span<span>Menu span span</span></span></div>',
		'<div>one</div>',
		'<div>two</div>',
		'</div>',
	];

	app.MenuView = Marionette.ItemView.extend({
		template: menuTemplate.join(''),
		onRender: function() {
			console.log(this.$el.find('#start ~ div'));
		}
	});

})(Application);