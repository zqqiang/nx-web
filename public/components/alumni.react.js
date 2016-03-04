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

var Section = React.createClass({
    render: function() {
        return (
            <section className="bg-primary" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <h2 className="section-heading">We've got what you need!</h2>
                            <hr className="light" />
                            <p className="text-faded">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>
                            <a href="javascript:void(0);" className="btn btn-default btn-xl">Get Started!</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

var AlumniView = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <Section />
            </div>
        );
    }
});

module.exports = AlumniView;
