var React = require('react');
var Header = require('./header.react');

var BoxWidget = React.createClass({
    render: function() {
        return (
        	<div class="box box-widget">
        		
        	</div>
        );
    }
});

var Content = React.createClass({
    render: function() {
        return (
            <section className="content">
                <div className="row">
                	<BoxWidget />
                </div>
            </section>
        );
    }
});

var Salon = React.createClass({
    render: function() {
        return (
            <Header title='Services' smalltitle='Salon' icon='briefcase' menu='Services' submenu='Salon' /> < Content / >
        );
    }
});

module.exports = Salon;
