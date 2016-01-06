define(['marionette', 'templates/compiled'], function(Marionette, JST) {
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
			this.$el.find('.creative').stop().animate({
				scrollTop: (this.$el.find('a.page-scroll').offset().top - 50)
			}, 1250, 'easeInOutExpo');
			event.preventDefault();
		}
	});
	return Creative;
});