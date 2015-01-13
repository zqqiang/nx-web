define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Dashboard = Marionette.ItemView.extend({
		template: JST.DashboardTemplate,
		onRender: function() {
			var self = this;
			$.ajax({
				url: 'Dashboard',
			}).success(function(data, textStatus, jqXHR) {
				self.$el.find('#count-chart').highcharts({
					title: {
						text: 'Mongodb Statics Dashboard',
						x: -20 //center
					},
					subtitle: {
						text: 'All Count: ' + data.all_count,
						x: -20
					},
					xAxis: {
						categories: ['Beijing', 'Shenzhen']
					},
					yAxis: {
						title: {
							text: 'Count'
						},
						plotLines: [{
							value: 0,
							width: 1,
							color: '#808080'
						}]
					},
					legend: {
						layout: 'vertical',
						align: 'right',
						verticalAlign: 'middle',
						borderWidth: 0
					},
					series: [{
						name: 'Business',
						data: [data.beijing_count, data.shenzhen_count]
					}]
				});
			});
		}
	});

	return Dashboard;
});