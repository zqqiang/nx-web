var $ = require('jquery');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactDom = require('react-dom');
var LoginView = require('../components/login.react');

var Login = Marionette.ItemView.extend({
    template: false,
    id: 'login-main',
    className: '',
    onShow: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        ReactDom.render(
            <LoginView />,
            document.getElementById('login-main')
        );
    }
});

module.exports = Login;
