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

// var BoxHeader = React.createClass({
//     render: function() {
//         return (
//             <div className="box-header with-border">
//                 <h3 className="box-title">Latest Members</h3>
//                 <div className="box-tools pull-right">
//                     <span className="label label-danger">8 New Members</span>
//                     <button type="button" className="btn btn-box-tool" data-widget="collapse">
//                         <i className="fa fa-minus"></i>
//                     </button>
//                     <button type="button" className="btn btn-box-tool" data-widget="remove">
//                         <i className="fa fa-times"></i>
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// });

var BoxHeaderSpan = React.createClass({
    render: function() {
        return (
            <span data-toggle={this.props.span.toggle} title={this.props.span.title} className={this.props.span.className}>
                {this.props.span.content}
            </span>
        );
    }
});

var BoxHeaderButton = React.createClass({
    render: function() {
        return (
            <button type="button" 
                    className="btn btn-box-tool" 
                    data-toggle={this.props.button.toggle} 
                    title={this.props.button.title} 
                    data-widget={this.props.button.widget}>
                <i className={'fa fa-'+this.props.button.iclass}></i>
            </button>
        );
    }
});

var BoxHeader = React.createClass({
    render: function() {
        var buttons = [];
        this.props.buttons.forEach(function(button) {
            buttons.push(<BoxHeaderButton button={button} key={button.iclass} />);
        });

        return (
            <div className="box-header with-border">
                <h3 className="box-title">{this.props.title}</h3>
                <div className="box-tools pull-right">
                    <BoxHeaderSpan span={this.props.span}/>
                    {buttons}
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

var LatestMemebersButtons = [
    { toggle: '', title: '', widget: 'collapse', iclass: 'minus' },
    { toggle: '', title: '', widget: 'remove', iclass: 'times' },
];

var DirectChatButtons = [
    { toggle: '', title: '', widget: 'collapse', iclass: 'minus' },
    { toggle: 'tooltip', title: 'Contacts', widget: 'chat-pane-toggle', iclass: 'comments' },
    { toggle: '', title: '', widget: 'remove', iclass: 'times' },
];

var LastestMembersSpan = { className: 'label label-danger', content: '8 New Members' };

var DirectChatSpan = { toggle: 'tooltip', title: '3', className: 'badge bg-yellow', content: '3' }

var LatestMembers = React.createClass({
    render: function() {
        return (
            <div className="box box-danger">
                <BoxHeader title='Latest Members' span={LastestMembersSpan} buttons={LatestMemebersButtons} />
                <BoxBodyUser items={LastestMembersItems} />
            </div>
        );
    }
});

var ChatMessageItem = React.createClass({
    render: function() {
        return (
            <div className={'direct-chat-msg ' + this.props.item.direction}>
                <div className="direct-chat-info clearfix">
                    <span className={'direct-chat-name pull-' + this.props.item.direction}>{this.props.item.name}</span>
                    <span className={'direct-chat-timestamp pull-' + this.props.item.rdirection}>{this.props.item.time}</span>
                </div>
                <img className="direct-chat-img" src={'theme/project/img/member/' + this.props.item.img} alt="message user image" />
                <div className="direct-chat-text">
                    {this.props.item.text}
                </div>
            </div>
        );
    }
});

var ChatMessage = React.createClass({
    render: function() {
        var items = [];
        this.props.items.forEach(function(item) {
            items.push(<ChatMessageItem item={item} key={item.name} />);
        });
        return (
            <div className='direct-chat-messages'>
                {items}
            </div>
        );
    }
});

var ChatMessageItems = [
    {direction: 'left', rdirection: 'right', name: 'Alexander Pierce', time: '23 Jan 2:00 pm', img: 'user1-128x128.jpg', text: 'Is this template really for free? That\'s unbelievable!'},
    {direction: 'right', rdirection: 'left', name: 'Sarah Bullock', time: '23 Jan 2:05 pm', img: 'user3-128x128.jpg', text: 'You better believe it!'},
];

var BoxBodyChat = React.createClass({
    render: function() {
        return (
            <div className='box-body'>
                <ChatMessage items={ChatMessageItems} />
            </div>
        );
    }
});

var DirectChat = React.createClass({
    render: function() {
        return (
            <div className="box box-warning direct-chat direct-chat-warning">
                <BoxHeader title='Direct Chat' span={DirectChatSpan} buttons={DirectChatButtons} />
                <BoxBodyChat />
            </div>
        );
    }
});

var Content = React.createClass({
    render: function() {
        return (
            <section className='content'>
                <div className='row'>
                    <div className="col-md-6">
                        <DirectChat />
                    </div>
                    <div className="col-md-6">
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
