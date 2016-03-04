var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <header>
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1>Nankai University Vancouver Alumni</h1>
                        <hr />
                        <p>Start from 2016</p>
                        <a href="javascript:void(0);" className="btn btn-primary btn-xl page-scroll">Find Out More</a>
                    </div>
                </div>
            </header>
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
