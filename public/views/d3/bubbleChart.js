define(['marionette', 'd3', 'templates/compiled'], function(Marionette, d3, JST) {
	const customerData = [{
		ssn: "444-44-4444",
		name: "Bill",
		age: 35,
		email: "bill@company.com"
	}, {
		ssn: "555-55-5555",
		name: "Donna",
		age: 32,
		email: "donna@home.org"
	}];

	const DB_NAME = 'flareDb';
	const DB_VERSION = 1;
	var db;

	var D3 = Marionette.ItemView.extend({
		template: JST.BubbleChartTemplate,
		className: 'D3',
		ui: {
			'chart': '.d3-bubble-chart'
		},
		events: {
			'click @ui.chart': 'clickChart'
		},
		initialize: function() {
			this.openDB();
		},
		onShow: function() {
			this.drawBubble();
		},
		drawBubble: function() {
			var diameter = 960,
				format = d3.format(",d"),
				color = d3.scale.category20c();

			var bubble = d3.layout.pack()
				.sort(null)
				.size([diameter, diameter])
				.padding(1.5);

			var svg = d3.select("div.d3-bubble-chart").append("svg")
				.attr("width", diameter)
				.attr("height", diameter)
				.attr("class", "bubble");

			d3.json("../data/flare.json", function(error, root) {
				if (error) throw error;

				var node = svg.selectAll(".node")
					.data(bubble.nodes(classes(root))
						.filter(function(d) {
							return !d.children;
						}))
					.enter().append("g")
					.attr("class", "node")
					.attr("transform", function(d) {
						return "translate(" + d.x + "," + d.y + ")";
					});

				node.append("title")
					.text(function(d) {
						return d.className + ": " + format(d.value);
					});

				node.append("circle")
					.attr("r", function(d) {
						return d.r;
					})
					.style("fill", function(d) {
						return color(d.packageName);
					});

				node.append("text")
					.attr("dy", ".3em")
					.style("text-anchor", "middle")
					.text(function(d) {
						return d.className.substring(0, d.r / 3);
					});
			});

			// Returns a flattened hierarchy containing all leaf nodes under the root.
			function classes(root) {
				var classes = [];

				function recurse(name, node) {
					if (node.children) node.children.forEach(function(child) {
						recurse(node.name, child);
					});
					else classes.push({
						packageName: name,
						className: node.name,
						value: node.size
					});
				}

				recurse(null, root);
				return {
					children: classes
				};
			}

			d3.select(self.frameElement).style("height", diameter + "px");
		},
		openDB: function() {
			var req = indexedDB.open(DB_NAME, DB_VERSION);

			req.onerror = function(event) {
				console.log("Database error: " + event.target.errorCode);
			};

			req.onsuccess = function(event) {
				// Better use "this" than "req" to get the result to avoid problems with garbage collection.
				// db = req.result;
				db = this.result;
				console.log("openDb DONE");
			};

			req.onupgradeneeded = function(event) {
				console.log("openDb.onupgradeneeded");

				var result = event.target.result;

				var objectStore = result.createObjectStore("customers", {
					keyPath: "ssn"
				});

				objectStore.createIndex("name", "name", {
					unique: false
				});

				objectStore.createIndex("email", "email", {
					unique: true
				});

				objectStore.transaction.oncomplete = function(event) {
					var customerObjectStore = result.transaction("customers", "readwrite").objectStore("customers");
					for (var i in customerData) {
						customerObjectStore.add(customerData[i]);
					}
				};
			};
		},
		queryDB: function() {
			var store = db.transaction("customers").objectStore("customers");

			store.get("444-44-4444").onsuccess = function(event) {
				// console.log("Name for SSN 444-44-4444 is " + event.target.result.name);
				console.log(event.target);
			};
		},
		clickChart: function() {
			this.queryDB();
		}
	});
	return D3;
});