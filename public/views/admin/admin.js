define(['marionette', 'templates/compiled', 'views/admin/topbar', 'views/admin/bottom'], function(Marionette, JST, TopBarView, BottomView) {
	var Admin = Marionette.LayoutView.extend({
		template: JST.AdminTemplate,
		className: 'wrapper',
		regions: {
			top: '#top-bar',
			bottom: '#bottom'
		},
		onShow: function() {
			this.getRegion('top').show(new TopBarView());
			this.getRegion('bottom').show(new BottomView());
		}
	});
	return Admin;
});