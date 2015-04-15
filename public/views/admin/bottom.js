define(
	['marionette', 'templates/compiled', 'views/admin/menu', 'views/admin/customer'],
	function(Marionette, JST, MenuView, CustomerView) {
		var Bottom = Marionette.LayoutView.extend({
			template: JST.BottomTemplate,
			className: 'container',
			regions: {
				menu: '#main-nav',
				content: 'div.content-wrapper'
			},
			onShow: function() {
				this.getRegion('menu').show(new MenuView());
				this.getRegion('content').show(new CustomerView());
			}
		});
		return Bottom;
	});