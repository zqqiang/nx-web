var React = require('react');

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

module.exports = Paragraph;
