if (typeof DEBUG === 'undefined') DEBUG = true;

require.config({

    baseUrl: '/',

    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'jquery.easing': 'bower_components/jquery.easing/js/jquery.easing',
        'jquery.fittext': 'bower_components/FitText.js/jquery.fittext',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap',
        'underscore': 'bower_components/underscore/underscore',
        'backbone': 'bower_components/backbone/backbone',
        'marionette': 'bower_components/backbone.marionette/lib/backbone.marionette',
        'handlebars': 'bower_components/handlebars/handlebars',
        'text': 'bower_components/text/text',
        'highcharts': 'bower_components/highstock-release/highstock',
        'bootbox': 'bower_components/bootbox/bootbox',
        'mobile-detect': 'bower_components/mobile-detect/mobile-detect',
        'masonry': 'bower_components/masonry/dist/masonry.pkgd',
        'd3': 'bower_components/d3/d3',
        'pouchdb': 'bower_components/pouchdb/dist/pouchdb',
        'localforage': 'bower_components/localforage/dist/localforage',
    },

    // non-AMD lib
    shim: {
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery'],
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'jquery.easing': ['jquery'],
        'jquery.fittext': ['jquery'],
    },
});

require(['main']); // Initialize the application with the main application file.