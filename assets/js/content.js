(function(app) {
	var contentTemplate = [
		'<div>',
		'<div class="container">',
		'<div class="row">',

		'<div class="col-sm-3">',
		'<p><span class="glyphicon glyphicon-home"></span> Home</p>',
		'<p><span class="icon fa fa-group"></span> Team</p>',
		'<p><span class="fa fa-arrow-circle-up green"></span><span class="green"> Bring Up</span></p>',
		'<p><span class="fa fa-arrow-circle-down red"></span><span class="red"> Bring Down</span></p>',
		'<p><a class="navbar-brand" href="index.html">',
		'<img src="assets/css/images/logo.png" alt="Bootstrappin" width="120">',
		'</a></p>',
		'</div>',

		'<div class="col-sm-3">',
		'<h2>Welcome!</h2>',
		'<p>Suspendisse et arcu felis ...</p>',
		'<p><a class="btn btn-primary pull-left" href="#">See our portfolio</a></p>',
		'</div>',

		'<div class="col-sm-3">',
		'<h2>Recent Updates</h2>',
		'<p>Suspendisse et arcu felis ...</p>',
		'<p><a class="btn btn-primary center-block" href="#">See what\'s new!</a></p>',
		'</div>',

		'<div class="col-sm-3">',
		'<h2>Our Team</h2>',
		'<p>Suspendisse et arcu felis ...</p>',
		'<p><a class="btn btn-primary pull-right" href="#">Meet the team!</a></p>',
		'</div>',

		'</div>',
		'</div>',
		'</div>',
	];

	app.ContentView = Marionette.ItemView.extend({
		template: contentTemplate.join('')
	});

	app.addRegions({
		mainRegion: "#main-region",
	});

	app.addInitializer(function(options) {
		app.mainRegion.show(new app.ContentView());
		app.vent.trigger("ventEvent", "addInitializer running!");
	});

	app.on("initialize:before", function(options) {
		console.log("initialize:before ", options.msg);
	});

	app.on("initialize:after", function(options) {
		console.log("initialize:after");
	});

	app.on("start", function(options) {
		console.log("start");
		console.log("todoLists: ", app.request("todoLists", "one"));
		app.execute("command", "command start");
	});

	app.onInitializeBefore = function(options) {
		console.log("onInitializeBefore");
	};

	app.vent.on("ventEvent", function(data) {
		console.log("vent event is running! data is ", data);
	});

	app.todoLists = {
		one: "oneList"
	};

	app.reqres.setHandler("todoLists", function(type) {
		return app.todoLists[type];
	});

	app.commands.setHandler("command", function(type) {
		console.log("command [", type, "] is received!");
	});

})(Application);