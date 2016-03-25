var React = require('react');
var Header = require('./header.react');

var Salon = React.createClass({
    render: function() {
        return (
            <Header title='Services' smalltitle='Salon' icon='briefcase' menu='Services' submenu='Salon' />
        );
    }
});

module.exports = Salon;
