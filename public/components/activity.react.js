var $ = require('jquery');
var React = require('react');

var ContentHeader = React.createClass({
    render: function() {
        return (
            <section className="content-header">
              <h1>
                Alumni
                <small>Version 1.0</small>
              </h1>
              <ol className="breadcrumb">
                <li><a href="javascript:void(0);"><i className="fa fa-dashboard"></i> Alumni</a></li>
                <li className="active">AlumniActivity</li>
              </ol>
            </section>
        );
    }
});

var BoxHeader = React.createClass({
    render: function() {
        return (
            <div className="box-header with-border">
                <h3 className="box-title">Latest Members</h3>
                <div className="box-tools pull-right">
                    <span className="label label-danger">8 New Members</span>
                    <button type="button" className="btn btn-box-tool" data-widget="collapse">
                        <i className="fa fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove">
                        <i className="fa fa-times"></i>
                    </button>
                </div>
            </div>
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

var BoxBody = React.createClass({
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
                <BoxHeader />
                <BoxBody items={LastestMembersItems} />
            </div>
        );
    }
});

var DirectChat = React.createClass({
    render: function(){
        return (
            <div class="box box-warning direct-chat direct-chat-warning">
                
            </div>
        );
    }
});

var Content = React.createClass({
    render: function() {
        return (
            <section className='content'>
                <div className='row'>
                    <div class="col-md-6">
                        <DirectChat />
                    </div>
                    <div class="col-md-6">
                        <LatestMembers />
                    </div>
                </div>
            </section>
        );
    }
});

var ActivityView = React.createClass({
    render: function() {
        return (
            <div>
                <ContentHeader />
                <Content />
            </div>
        );
    }
});

module.exports = ActivityView;
