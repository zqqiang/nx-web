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
