import React, { PropTypes } from 'react'

const Google = ({onHandleClick}) => {
    return (
        <div className="login-page">
            <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
        </div>
    )
}

export default Google