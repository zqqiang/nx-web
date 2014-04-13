var nxManager = new Marionette.Application();

var staticTemplate = "<p>template area</p>";

nxManager.addRegions({
	mainRegion: "#main-region"
});

nxManager.StaticView = Marionette.ItemView.extend({
	template: staticTemplate
});

nxManager.addInitializer(function(options) {
	var staticView = new nxManager.StaticView();
	nxManager.mainRegion.show(staticView);
});

nxManager.on("initialize:before", function(options) {
	console.log("initialize:before ", options.msg);
});

nxManager.on("initialize:after", function(options) {
	console.log("initialize:after");
});

nxManager.on("start", function(options){
	console.log("start");
});

nxManager.onInitializeBefore = function(options){
	console.log("onInitializeBefore");
};

nxManager.start({
	msg: "start up"
});