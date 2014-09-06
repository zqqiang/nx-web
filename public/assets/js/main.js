/*
	author: zqqiang
*/

Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
	// use Handlebars.js to compile the template
	return Handlebars.compile(rawTemplate);
}

Application = new Marionette.Application();

$(document).ready(function() {
	Application.start({
		msg: "start up"
	});
	Backbone.history.start();
});

//get template use ajax
(function(app) {

	app.getTemplateAjax = function getTemplateAjax(path) {
		$.ajax({
			url: path,
			cache: true,
			async: false,
			success: function(data) {
				$('#handlebars-template').html(data);
			}
		});
	};

	app.getTemplateAjax("assets/js/template/handlebars.html");

})(Application);