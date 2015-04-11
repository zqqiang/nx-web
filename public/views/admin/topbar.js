define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Topbar = Marionette.ItemView.extend({
		template: JST.TopbarTemplate,
		className: 'container',
		onShow: function() {}
	});
	return Topbar;
});