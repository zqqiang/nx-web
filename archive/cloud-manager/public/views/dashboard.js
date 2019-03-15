define(['marionette', 'templates/compiled', 'app'], function(Marionette, JST, app) {
	var Dashboard = Marionette.ItemView.extend({
		template: JST.DashboardTemplate,
		onRender: function() {
			var self = this;
			$.ajax({
				url: 'Dashboard',
			}).success(function(data, textStatus, jqXHR) {
				if ('AndroidOS' === app.md.os()) {
					self.showMobileChart(data);
				} else {
					self.showPCChart(data);
				}
			});
		},
		showMobileChart: function(data) {
			this.$el.find('#count-chart').highcharts({
				title: {
					text: 'Statics Dashboard',
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
					enabled: false
				},
				series: [{
					name: 'Business',
					data: [data.beijing_count, data.shenzhen_count]
				}]
			});
		},
		showPCChart: function(data) {
			this.$el.find('#count-chart').highcharts({
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
		}
	});

	return Dashboard;
});