define(['marionette', 'templates/compiled'], function(Marionette, JST) {

	var TreeView = Marionette.CompositeView.extend({
		template: JST.NodeTemplate,
		tagName: "ul",
		initialize: function() {
			// grab the child collection from the parent model
			// so that we can render the collection as children
			// of this parent node
			this.collection = this.model.nodes;
		},
		appendHtml: function(collectionView, itemView) {
			// ensure we nest the child list inside of 
			// the current list item
			collectionView.$("li:first").append(itemView.el);
		}
	});

	Menu = Marionette.CollectionView.extend({
		itemView: TreeView,
		initialize: function() {

			var treeData = [{
				nodeName: "Form",
				nodes: [{
					nodeName: "Editors",
				}, {
					nodeName: "Table",
				}, {
					nodeName: "Dianping",
				}]
			}, {
				nodeName: "Graph",
				nodes: [{
					nodeName: "HighCharts",
				}, {
					nodeName: "3d",
				}]
			}];

			var TreeNode = Backbone.Model.extend({
				initialize: function() {
					var nodes = this.get("nodes");
					if (nodes) {
						this.nodes = new TreeNodeCollection(nodes);
						this.unset("nodes");
					}
				}
			});

			var TreeNodeCollection = Backbone.Collection.extend({
				model: TreeNode
			});

			var tree = new TreeNodeCollection(treeData);

			this.collection = tree;
		}
	});

	return Menu;
});