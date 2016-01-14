var Marionette = require('backbone.marionette');
var ControlPanelHbs = require('../templates/controlPanel.html');

var ControlPanel = Marionette.ItemView.extend({
	template: ControlPanelHbs,
	className: 'control-panel',
});

module.exports = ControlPanel;