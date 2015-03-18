define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Stock = Marionette.ItemView.extend({
		template: JST.StockTemplate,
		onShow: function() {
			$.ajax({
				url: 'Stock',
			}).success(function(data, textStatus, jqXHR) {
				$('#container').highcharts('StockChart', {
					rangeSelector: {
						selected: 1
					},
					title: {
						text: '平安银行(000001.sz) Stock Price'
					},
					series: [{
						name: '平安银行(000001.sz)',
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