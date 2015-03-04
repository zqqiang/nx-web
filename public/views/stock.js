define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Stock = Marionette.ItemView.extend({
		template: JST.StockTemplate,
		onShow: function() {
			$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function(data) {
				// Create the chart
				$('#container').highcharts('StockChart', {
					rangeSelector: {
						selected: 1
					},

					title: {
						text: 'AAPL Stock Price'
					},

					series: [{
						name: 'AAPL',
						data: data,
						tooltip: {
							valueDecimals: 2
						}
					}]
				});
			});
		}
	});
	return Stock;
});