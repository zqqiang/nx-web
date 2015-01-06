define(
	[
		'handlebars',
		'text!templates/table.html',
		'text!templates/row.html',
		'text!templates/editor.html',
		'text!templates/layout.html',
		'text!templates/node.html',
		'text!templates/navbar.html',
		'text!templates/panel.html',
		'text!templates/dianping.html',
		'text!templates/dashboard.html',
	],
	function(
		Handlebars,
		TableTpl,
		RowTpl,
		EditorTpl,
		LayoutTpl,
		NodeTpl,
		NavbarTpl,
		PanelTpl,
		DianpingTpl,
		DashboardTpl
	) {
		return {
			TableTemplate: Handlebars.compile(TableTpl),
			RowTemplate: Handlebars.compile(RowTpl),
			EditorTemplate: Handlebars.compile(EditorTpl),
			LayoutTemplate: Handlebars.compile(LayoutTpl),
			NodeTemplate: Handlebars.compile(NodeTpl),
			NavbarTemplate: Handlebars.compile(NavbarTpl),
			PanelTemplate: Handlebars.compile(PanelTpl),
			DianpingTemplate: Handlebars.compile(DianpingTpl),
			DashboardTemplate: Handlebars.compile(DashboardTpl),
		};
	}
);