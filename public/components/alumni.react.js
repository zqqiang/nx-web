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

var About = React.createClass({
    render: function() {
        return (
            <section id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Nankai University Vancouver Alumin is a big family!</h2>
                            <p className="lead">We have <a target="_blank" href="javascript:void(0);">{this.props.alumnus}</a> alumnus from <a target="_blank" href="http://www.nankai.edu.cn/">Nankai University</a> now.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

var Services = React.createClass({
    render: function() {
        return (
            <section id="services" className="services bg-primary">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-10 col-lg-offset-1">
                            <h2>Our Services</h2>
                            <hr className="small" />
                            <div className="row">
                                <ServiceItem item={this.props.item}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

var ServiceItem = React.createClass({
    getIcon: function() {
        return 'fa fa-cloud fa-stack-1x text-primary';
    },
    render: function() {
        return (
            <div className="col-md-3 col-sm-6">
                <div className="service-item">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className={this.getIcon()}></i>
                    </span>
                    <h4>
                        <strong>{this.props.item.name}</strong>
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <a href="javascript:void(0);" className="btn btn-light">Learn More</a>
                </div>
            </div>
        );
    }
});

var AlumniView = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <About alumnus="500+" />
                <Services item={{name:'Finance', icon:'cloud'}} />
            </div>
        );
    }
});

module.exports = AlumniView;
