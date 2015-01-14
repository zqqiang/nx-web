if (typeof DEBUG === 'undefined') DEBUG = true;

require.config({

    baseUrl: '/',

    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap',
        'underscore': 'bower_components/underscore/underscore',
        'backbone': 'bower_components/backbone/backbone',
        'marionette': 'bower_components/backbone.marionette/lib/backbone.marionette',
        'handlebars': 'bower_components/handlebars/handlebars',
        'text': 'bower_components/text/text',
        'highcharts': 'bower_components/highcharts/highcharts',
        'bootbox': 'bower_components/bootbox/bootbox',
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
        'marionette': {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'highcharts': {
            exports: 'Highcharts'
        }
    },
});

require(['main']); // Initialize the application with the main application file.