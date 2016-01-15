// define(['marionette', 'masonry', 'templates/compiled'], function(Marionette, Masonry, JST) {
var Marionette = require('backbone.marionette');
var MarketingHbs = require('../templates/marketing.html');
var Masonry = require('masonry-layout');

var Marketing = Marionette.ItemView.extend({
	template: MarketingHbs,
	className: 'marketing',
	onShow: function() {
		new Masonry('.reviews', {
			itemSelector: '.hreview'
		});
	}
});

module.exports = Marketing;
// });