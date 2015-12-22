define(['marionette', 'd3', 'templates/compiled'], function(Marionette, d3, JST) {
	var D3 = Marionette.ItemView.extend({
		template: JST.D3Template,
		className: 'D3',
		onShow: function() {
			d3.select('div.d3-body').text('Hello D3.js');
		}
	});
	return D3;
});