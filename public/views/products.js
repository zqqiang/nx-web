define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Products = Marionette.ItemView.extend({
		template: JST.ProductsTemplate,
		className: 'container',
	});

	return Products;
});