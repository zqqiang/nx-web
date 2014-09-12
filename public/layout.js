define(['marionette'], function(Marionette) {
	var layoutTemplate = [
		'<div>',
		'<div id="menu" class="col-sm-2">Todo: menu</div>',
		'<div id="content" class="col-sm-10">Todo: content</div>',
		'</div>',
	];

	var Layout = Marionette.Layout.extend({
		template: layoutTemplate.join(''),
		regions: {
			menu: '#menu',
			content: '#content'
		}
	});

	return Layout;
});