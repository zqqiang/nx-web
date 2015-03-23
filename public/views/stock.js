define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var showStock = function(id, name) {
		$.ajax({
			url: 'Stock?find=id,' + id,
		}).success(function(data, textStatus, jqXHR) {
			$('#' + id.replace('.', '')).highcharts('StockChart', {
				rangeSelector: {
					selected: 1
				},
				title: {
					text: name + '(' + id + ') Stock Price'
				},
				series: [{
					name: name + '(' + id + ')',
					data: data,
					tooltip: {
						valueDecimals: 2
					}
				}]
			});
		});
	};

	var Stock = Marionette.ItemView.extend({
		template: JST.StockTemplate,
		onShow: function() {
			showStock('000001.sz', '平安银行');
			showStock('000002.sz', '万科A');
		}
	});
	return Stock;
});