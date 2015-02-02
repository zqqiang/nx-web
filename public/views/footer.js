define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Footer = Marionette.ItemView.extend({
		template: JST.FooterTemplate,
	});
	return Footer;
});