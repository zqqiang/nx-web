define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Marketing = Marionette.ItemView.extend({
		template: JST.MarketingTemplate,
	});

	return Marketing;
});