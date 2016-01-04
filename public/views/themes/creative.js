define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Creative = Marionette.ItemView.extend({
		template: JST.CreativeTemplate,
		className: 'creative'
	});
	return Creative;
});