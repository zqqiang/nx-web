var $ = require('jquery');
var Marionette = require('backbone.marionette');
var QuickStartHbs = require('../templates/quickstart.html');
var React = require('react');
var ReactDOM = require('react-dom');

var QuickStart = Marionette.ItemView.extend({
    template: QuickStartHbs,
    className: 'quickstart',
    onShow: function() {
        var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
        var window_height = $(window).height();
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);

        var Title = React.createClass({
            render: function() {
                return (<h2>{this.props.title}</h2>);
            }
        });

        var Content = React.createClass({
            render: function() {
                return (<h3>{this.props.content}</h3>);
            }
        });

        var Paragraph = React.createClass({
            render: function() {
                var rows = [];
                this.props.articles.forEach(function(article) {
                    rows.push(<Title title={article.title} />);
                    rows.push(<Content content={article.content} />);
                });
                return (<div>{rows}</div>);
            }
        });

        var Articles = [{
            title: 'nxManager',
            content: 'This repository is a next generation central manager framework.'
        }, {
            title: 'Table of Contents',
            content: '[Prepare](#prepare)'
        }];

        ReactDOM.render(
            <Paragraph articles={Articles}/>,
            document.getElementById('quick-start')
        );
    }
});

module.exports = QuickStart;
