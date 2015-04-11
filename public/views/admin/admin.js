define(['marionette', 'templates/compiled', 'views/admin/topbar'], function(Marionette, JST, TopBarView) {
	var Admin = Marionette.LayoutView.extend({
		template: JST.AdminTemplate,
		className: 'wrapper',
		regions: {
			top: '#top-bar',
			bottom: '#bottom'
		},
		onShow: function() {
			this.getRegion('top').show(new TopBarView());
		}
	});
	return Admin;
});