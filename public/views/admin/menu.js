define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Menu = Marionette.ItemView.extend({
		template: JST.MenuTemplate,
		tagName: 'nav',
		className: 'main-nav',
		onShow: function() {}
	});
	return Menu;
});