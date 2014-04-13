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

	nxManager.vent.trigger("ventEvent", "addInitializer running!");
});

nxManager.on("initialize:before", function(options) {
	console.log("initialize:before ", options.msg);
});

nxManager.on("initialize:after", function(options) {
	console.log("initialize:after");
});

nxManager.on("start", function(options){
	console.log("start");
	console.log("todoLists: ", nxManager.request("todoLists", "one"));
	nxManager.execute("command", "command start");
});

nxManager.onInitializeBefore = function(options){
	console.log("onInitializeBefore");
};

nxManager.vent.on("ventEvent", function(data){
	console.log("vent event is running! data is ", data);
});

nxManager.todoLists = {
	one: "oneList"
};

nxManager.reqres.setHandler("todoLists", function(type){
	return nxManager.todoLists[type];
});

nxManager.commands.setHandler("command", function(type){
	console.log("command [", type, "] is received!");
});

nxManager.start({
	msg: "start up"
});