define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var SignIn = Marionette.LayoutView.extend({
		template: JST.SignInTemplate,
		className: 'modal-dialog',
	});
	return SignIn;
});