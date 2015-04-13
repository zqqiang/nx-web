define(['marionette', 'templates/compiled', 'views/admin/menu'], function(Marionette, JST, MenuView) {
	var Bottom = Marionette.LayoutView.extend({
		template: JST.BottomTemplate,
		className: 'container',
		regions: {
			menu: '#main-nav'
		},
		onShow: function() {
			this.getRegion('menu').show(new MenuView());
		}
	});
	return Bottom;
});