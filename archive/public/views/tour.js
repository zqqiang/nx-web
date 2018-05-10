define(['marionette', 'templates/compiled', 'views/dianping', 'views/dashboard'], function(Marionette, JST, Business, Dashboard) {
	var Tour = Marionette.LayoutView.extend({
		template: JST.TourTemplate,
		className: 'col-md-12',
		regions: {
			header: '#header',
			business: '#business',
			dashboard: '#dashboard',
		},
		onShow: function() {
			this.business.show(new Business());
			this.dashboard.show(new Dashboard());
		}
	});
	return Tour;
});