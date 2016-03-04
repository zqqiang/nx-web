var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <h1>
                Nankai Vancouver Alumni
                <small>start from 2016</small>
            </h1>
        );
    }
});

var AlumniView = React.createClass({
    render: function() {
        return (
            <Header />
        );
    }
});

module.exports = AlumniView;
