define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Stock = Marionette.ItemView.extend({
		template: JST.StockTemplate,
		onShow: function() {
			$.ajax({
				url: 'Stock'
			}).success(function(data, textStatus, jqXHR) {
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