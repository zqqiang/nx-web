var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <header id="top" className="header">
                <div className="text-vertical-center">
                    <h1>Nankai University</h1>
                    <h3>Vancouver Alumni</h3>
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
                            <h2>Nankai University Vancouver Alumni is a big family!</h2>
                            <p className="lead">
                                We have <a target="_blank" href="javascript:void(0);">{this.props.alumni}</a> alumni from <a target="_blank" href="http://www.nankai.edu.cn/">Nankai University</a> now.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

var Services = React.createClass({
    render: function() {
        var items = [];
        this.props.items.forEach(function(item) {
            items.push(<ServiceItem item={item} key={item.name} />);
        }.bind(this));

        return (
            <section id="services" className="services bg-primary">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-10 col-lg-offset-1">
                            <h2>Our Services</h2>
                            <hr className="small" />
                            <div className="row">
                                {items}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

var ServiceItem = React.createClass({
    render: function() {
        return (
            <div className="col-md-3 col-sm-6">
                <div className="service-item">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className={'fa fa-' + this.props.item.icon + ' fa-stack-1x text-primary'}></i>
                    </span>
                    <h4>
                        <strong>{this.props.item.name}</strong>
                    </h4>
                    <p>{this.props.item.desc}</p>
                    <a href="javascript:void(0);" className="btn btn-light">Learn More</a>
                </div>
            </div>
        );
    }
});

var Footer = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-lg-offset-1 text-center">
                            <h4><strong>Nankai University Alumni</strong></h4>
                            <p>Burnaby<br />British Columbia, CA</p>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-phone fa-fw"></i> (604) 500-1661</li>
                                <li><i className="fa fa-envelope-o fa-fw"></i>  <a href="mailto:name@example.com">name@example.com</a></li>
                            </ul>
                            <hr className="small" />
                            <p className="text-muted">Copyright &copy; Your Website 2016</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
});

var ServiceItems = [
    { name: 'Finance', icon: 'money', desc: 'You can disscuss finance topics here.' },
    { name: 'Car', icon: 'car', desc: 'You can disscuss car traveling topics here.' },
    { name: 'IT', icon: 'laptop', desc: 'You can disscuss IT technology topics here.' },
    { name: 'Baby', icon: 'users', desc: 'You can disscuss baby nursing topics here.' },
];

var AlumniView = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <About alumni="500+" />
                <Services items={ServiceItems} />
                <Footer />
            </div>
        );
    }
});

module.exports = AlumniView;
