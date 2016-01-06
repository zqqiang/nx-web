define(['marionette', 'templates/compiled', 'jquery.easing'], function(Marionette, JST) {
	var Creative = Marionette.ItemView.extend({
		template: JST.CreativeTemplate,
		className: 'creative',
		ui: {
			'more': 'a.page-scroll'
		},
		events: {
			'click @ui.more': 'clickMore'
		},
		onRender: function() {

		},
		clickMore: function(event) {
			$('html, body').animate({
				scrollTop: (this.$el.find('#about').offset().top)
			}, 1250, 'easeInOutExpo');
			event.preventDefault();
		}
	});
	return Creative;
});