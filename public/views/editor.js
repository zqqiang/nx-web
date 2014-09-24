define(['marionette', 'templates/compiled'], function(Marionette, JST) {
	var Editor = Marionette.ItemView.extend({
		template: JST.EditorTemplate,
		className: 'form-group',
		getValue: function() {
			return this.$el.find('input').val();
		},
	});
	return Editor;
});