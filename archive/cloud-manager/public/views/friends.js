var $ = require('jquery');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactDom = require('react-dom');
var FriendsView = require('../components/friends.react');

var Friends = Marionette.ItemView.extend({
    template: false,
    id: 'friends-main',
    className: '',
    onShow: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        ReactDom.render(
            <FriendsView />,
            document.getElementById('friends-main')
        );
    }
});

module.exports = Friends;
