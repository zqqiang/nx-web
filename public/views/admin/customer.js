define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Customer = Marionette.ItemView.extend({
		template: JST.CustomerTemplate,
		onShow: function() {}
	});
	return Customer;
});