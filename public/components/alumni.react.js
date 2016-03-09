var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <header id="top" className="header">
                <div className="text-vertical-center">
                    <h1>Nankai University</h1>
                    <h3>Vancouver Alumin</h3>
                    <br />
                    <a href="#about" className="btn btn-dark btn-lg">Start From 2016</a>
                </div>
            </header>
        );
    }
});

var AlumniView = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
            </div>
        );
    }
});

module.exports = AlumniView;
