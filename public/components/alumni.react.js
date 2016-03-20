var $ = require('jquery');
var React = require('react');

var Header = React.createClass({
    handleClick: function() {
        $('html, body').animate({
            scrollTop: ($('#about').offset().top)
        }, 1250, 'easeInOutExpo');
    },
    render: function() {
        return (
            <header id="top" className="header">
                <div className="text-vertical-center">
                    <h1>Nankai University</h1>
                    <h3>Vancouver Alumni</h3>
                    <br />
                    <a href='javascript:void(0);' className="btn btn-dark btn-lg" onClick={this.handleClick}>Start From 2016</a>
                </div>
            </header>
        );
    }
});

var About = React.createClass({
    handleClick: function() {
        $('html, body').animate({
            scrollTop: ($('#services').offset().top)
        }, 1250, 'easeInOutExpo');
    },
    render: function() {
        return (
            <section id="about" className="about" onClick={this.handleClick}>
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
    handleClick: function() {
        $('html, body').animate({
            scrollTop: ($('#portfolio').offset().top)
        }, 1250, 'easeInOutExpo');
    },
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
                    <a href={'#' + this.props.item.name} className="btn btn-light">Learn More</a>
                </div>
            </div>
        );
    }
});

var PortfolioBox = React.createClass({
    render: function() {
        return (
            <div className="col-lg-4 col-sm-6">
                <a href="javascript:void(0);" className="portfolio-box">
                    <img src={this.props.item.src} className="img-responsive" alt="" />
                    <div className="portfolio-box-caption">
                        <div className="portfolio-box-caption-content">
                            <div className="project-category text-faded">
                                {this.props.item.category}
                            </div>
                            <div className="project-name">
                                {this.props.item.name}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
});

var Portfolio = React.createClass({
    render: function() {
        var items = [];
        this.props.items.forEach(function(item) {
            items.push(<PortfolioBox item={item} key={item.category} />);
        }.bind(this));

        return (
            <section className="no-padding" id="portfolio">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        {items}
                    </div>
                </div>
            </section>
        );
    }
});

var UserListItem = React.createClass({
    render: function() {
        return (
            <li>
              <img src={this.props.item.src} alt="User Image" />
              <a className="users-list-name" href='javascript:void(0);'>{this.props.item.name}</a>
              <span className="users-list-date">{this.props.item.date}</span>
            </li>
        );
    }
});

var BoxBodyUser = React.createClass({
    render: function() {
        var items = [];
        this.props.items.forEach(function(item) {
            items.push(<UserListItem item={item} key={item.name} />);
        });

        return (
            <div className="box-body no-padding">
                <ul className="users-list clearfix">
                    {items}
                </ul>
            </div>
        );
    }
});

var LastestMembersItems = [
    { name: 'Alexander Pierce', date: 'Today', src: 'theme/project/img/member/user1-128x128.jpg' },
    { name: 'Norman', date: 'Yesterday', src: 'theme/project/img/member/user8-128x128.jpg' },
    { name: 'Jane', date: '12 Jan', src: 'theme/project/img/member/user7-128x128.jpg' },
    { name: 'John', date: '12 Jan', src: 'theme/project/img/member/user6-128x128.jpg' },
    { name: 'Alexander', date: '13 Jan', src: 'theme/project/img/member/user2-128x128.jpg' },
    { name: 'Sarah', date: '14 Jan', src: 'theme/project/img/member/user5-128x128.jpg' },
    { name: 'Nora', date: '15 Jan', src: 'theme/project/img/member/user4-128x128.jpg' },
    { name: 'Nadia', date: '15 Jan', src: 'theme/project/img/member/user3-128x128.jpg' },
];

var LatestMembers = React.createClass({
    render: function() {
        return (
            <div className="box box-danger">
                <BoxBodyUser items={LastestMembersItems} />
            </div>
        );
    }
});

var Members = React.createClass({
    render: function(){
        return (
            <section id='members' className='no-padding'>
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className='col-lg-12'>
                            <LatestMembers />
                        </div>
                    </div>
                </div>
            </section>
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
    { name: 'News', icon: 'newspaper-o', desc: 'Latest Announcement & News.' },
    { name: 'Enterprises', icon: 'building', desc: 'Alumni Enterprises.' },
    { name: 'Job', icon: 'laptop', desc: 'Job Offers.' },
    { name: 'Friends', icon: 'users', desc: 'Nankai Friends & Queqiao.' },
];

var PortfolioItems = [
    { name: '投资理财', src: 'theme/project/img/alumni/1.jpg', category: 'Finance' },
    { name: '运动健身', src: 'theme/project/img/alumni/2.jpg', category: 'SummerSports' },
    { name: '冰雪户外', src: 'theme/project/img/alumni/3.jpg', category: 'WinterSports' },
    { name: '自驾出行', src: 'theme/project/img/alumni/4.jpg', category: 'Driving' },
    { name: '国际桥牌', src: 'theme/project/img/alumni/5.jpg', category: 'Bridge' },
    { name: '育儿母婴', src: 'theme/project/img/alumni/6.jpg', category: 'Baby' },
];

var AlumniView = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <About alumni="500+" />
                <Services items={ServiceItems} />
                <Portfolio items={PortfolioItems} />
                <Members />
                <Footer />
            </div>
        );
    }
});

module.exports = AlumniView;
