var React = require('react');
import BoxBodyChat from '../containers/chat/boxBodyChat'
import BoxFooterChat from '../containers/chat/boxFooterChat'

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

var DirectChat = React.createClass({
    render: function() {
        return (
            <div className="box box-warning direct-chat direct-chat-warning">
                <BoxHeader title='Direct Chat' span={DirectChatSpan} buttons={DirectChatButtons} />
                <BoxBodyChat />
                <BoxFooterChat />
            </div>
        );
    }
});

module.exports = DirectChat;
