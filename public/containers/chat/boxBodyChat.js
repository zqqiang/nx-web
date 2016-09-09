import React from 'react'
import { connect } from 'react-redux'
import BoxBody from '../../components/chat/boxBodyChat.react'

const mapStateToProps = (state, ownProps) => {
    return {
        messages: state.chats,
        user: state.login.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {}
    }
}

const BoxBodyChat = connect(
    mapStateToProps,
    mapDispatchToProps
)(BoxBody)

export default BoxBodyChat
