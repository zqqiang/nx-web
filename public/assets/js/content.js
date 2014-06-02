(function(app) {
	var contentTemplate = [
		'<div>',
		'<div class="row">',

		'<div class="col-sm-2">',
		'<p><span class="glyphicon glyphicon-home"></span> Home</p>',
		'<p><span class="icon fa fa-group"></span> Team</p>',
		'<p><span class="fa fa-arrow-circle-up green"></span><span class="green"> Bring Up</span></p>',
		'<p><span class="fa fa-arrow-circle-down red"></span><span class="red"> Bring Down</span></p>',
		'<p><a class="navbar-brand" href="index.html">',
		'<img src="assets/css/images/logo.png" alt="Bootstrappin" width="120">',
		'</a></p>',
		'</div>',

		'<div class="col-sm-2">',
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
	];

	app.ContentView = Marionette.ItemView.extend({
		template: contentTemplate.join('')
	});

})(Application);