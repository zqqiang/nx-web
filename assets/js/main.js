/*
	author: zqqiang
*/

Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
	// use Handlebars.js to compile the template
	return Handlebars.compile(rawTemplate);
}

Application = new Marionette.Application();

$(document).ready(function() {
	// (function getTemplateAjax(path) {
	// 	$.ajax({
	// 		url: path,
	// 		cache: true,
	// 		success: function(data) {
	// 			$('#handlebars-template').html(data);
	// 		}
	// 	});
	// })("./template/handlebars.html");

	Application.start({
		msg: "start up"
	});
});