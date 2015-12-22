define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var D3 = Marionette.ItemView.extend({
		template: JST.D3Template,
		className: 'D3'
	});
	return D3;
});