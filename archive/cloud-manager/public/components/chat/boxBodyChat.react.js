import React from 'react'

// var ChatMessageItems = [
//     { direction: 'left', rdirection: 'right', name: 'Alexander Pierce', time: '23 Jan 2:00 pm', img: 'user1-128x128.jpg', text: 'Is this template really for free? That\'s unbelievable!' },
//     { direction: 'right', rdirection: 'left', name: 'Sarah Bullock', time: '23 Jan 2:05 pm', img: 'user3-128x128.jpg', text: 'You better believe it!' },
//     { direction: 'left', rdirection: 'right', name: 'Alexander Pierce', time: '23 Jan 2:00 pm', img: 'user1-128x128.jpg', text: 'Is this template really for free? That\'s unbelievable!' },
//     { direction: 'right', rdirection: 'left', name: 'Sarah Bullock', time: '23 Jan 2:05 pm', img: 'user3-128x128.jpg', text: 'You better believe it!' }
// ];

var ChatMessageItem = React.createClass({
    render: function() {
        return (
            <div className={'direct-chat-msg ' + this.props.item.direction}>
                <div className="direct-chat-info clearfix">
                    <span className={'direct-chat-name pull-' + this.props.item.direction}>{this.props.user}</span>
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
        let user = this.props.user;
        this.props.items.forEach(function(item, index) {
            items.push(<ChatMessageItem item={item} key={index} user={user} />);
        });
        return (
            <div className='direct-chat-messages'>
                {items}
            </div>
        );
    }
});

let BoxBodyChat = React.createClass({
    render: function() {
        return (
            <div className='box-body'>
                <ChatMessage items={this.props.messages} user={this.props.user} />
            </div>
        );
    }
});

export default BoxBodyChat;