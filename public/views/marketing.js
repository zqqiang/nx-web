define(['marionette', 'masonry', 'templates/compiled'], function(Marionette, Masonry, JST) {
	var Marketing = Marionette.ItemView.extend({
		template: JST.MarketingTemplate,
		onShow: function() {
			new Masonry('.reviews', {
				itemSelector: '.hreview'
			});
		}
	});

	return Marketing;
});