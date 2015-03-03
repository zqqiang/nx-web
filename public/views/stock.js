define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Stock = Marionette.ItemView.extend({
		template: JST.StockTemplate,
	});
	return Stock;
});