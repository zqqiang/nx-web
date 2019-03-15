define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Cloud = Marionette.ItemView.extend({
		template: JST.CloudTemplate,
		className: 'cloud'
	});
	return Cloud;
});