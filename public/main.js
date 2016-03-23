// require(
// 	[
// 		'jquery', 'app', 'views/tour', 'views/header', 'router',
// 		'views/table', 'views/dianping', 'views/dashboard', 'views/dummy',
// 		'models/session', 'views/panel', 'mobile-detect', 'views/signin',
// 		'views/homepage', 'views/products', 'views/footer', 'views/marketing',
// 		'views/stock', 'views/admin/admin', 'views/cloud', 'views/d3/bubbleChart',
// 		'views/db/indexed', 'views/db/pouch', 'views/db/localForage', 'views/themes/creative',
// 		'views/sidebar',
// 		'bootstrap', 'highcharts'
// 	],
// 	function(
// 		$, app, Tour, Header, Router,
// 		Table, Dianping, Dashboard, Dummy, SessionModel, Panel, MobileDetect,
// 		SignIn, Homepage, Products, Footer, Marketing, Stock, Admin, Cloud, BubbleChart,
// 		Indexed, Pouch, LocalForage, Creative, Sidebar
// 	) {

var $ = global.jQuery = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var Creative = require('./views/themes/creative.js');
var app = require('./app.js');
var Router = require('./router.js');
var Header = require('./views/header.js');
var Sidebar = require('./views/sidebar.js');
var LocalForage = require('./views/db/localForage.js');
var ControlPanel = require('./views/controlPanel.js');
var Ecommerce = require('./views/ecommerce.js');
var QuickStart = require('./views/quickstart.js');
var Alumni = require('./views/alumni.js');
var Friends = require('./views/friends.js');
var News = require('./views/news.js');
var Gallery = require('./views/gallery.js');
var Dummy = require('./views/dummy.js');

$(document).ready(function() {
    app.start({
        msg: "start up"
    });
});

var contextMap = {
    "": Creative,
    // "Tour": Tour,
    // "Stock": Stock,
    "ControlPanel": ControlPanel,
    // "Cloud": Cloud,
    // "BubbleChart": BubbleChart,
    // "Indexed": Indexed,
    // "Pouch": Pouch,
    "LocalForage": LocalForage,
    "Creative": Creative,
    'Ecommerce': Ecommerce,
    // "Editors": Dummy,
    // "Table": Table,
    // "Dianping": Dianping,
    // "Dashboard": Dashboard,
    // "HighCharts": Dummy,
    // "3d": Dummy,
    // "SignIn": SignIn,
    "QuickStart": QuickStart,
    "Alumni": Alumni,
    "Friends": Friends,
    "News": News,
    "Gallery": Gallery,
    "other": Dummy,
};

app.navigateTo = function(context, options) {
    app.mainRegion.show(new contextMap[context](options));
};

app.addInitializer(function(options) {
    app.router = new Router();

    app.addRegions({
        headerRegion: 'header[class="main-header"]',
        sidebarRegion: 'aside[class="main-sidebar"]',
        mainRegion: 'div[class="content-wrapper"]',
        footerRegion: 'footer[role="contentinfo"]',
    });

    app.headerRegion.show(new Header());
    app.sidebarRegion.show(new Sidebar());
    // app.footerRegion.show(new Footer());

    Backbone.history.start();
});
// 	}
// );
