if (typeof DEBUG === 'undefined') DEBUG = true;

require.config({

    baseUrl: '/',

    paths: {
        'jquery': 'assets/lib/jquery',
        'underscore': 'assets/lib/underscore',
        'backbone': 'assets/lib/backbone',
        'bootstrap': 'assets/lib/bootstrap',
        'marionette': 'assets/lib/backbone.marionette',
        'handlebars': 'assets/lib/handlebars',
    },

    // non-AMD lib
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        'marionette': {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
    }
});

require(['main']); // Initialize the application with the main application file.