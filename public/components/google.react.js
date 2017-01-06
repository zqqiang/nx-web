import React, { PropTypes } from 'react'

const Google = ({onHandleClick}) => {
	componentWillMount = () => {
        const script = document.createElement("script");

        script.src = "https://apis.google.com/js/platform.js?onload=renderButton";
        script.async = true;

        document.body.appendChild(script);
	},
    return (
        <div className="login-page">
	        <div className="login-box">
				<div className="login-logo">
            		<a href="javascript:void(0);"><b>nx</b>-manager</a>
        		</div>
        		<div className="login-box-body">
	            	<div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
        		</div>
	        </div>
        </div>
    )
}

export default Google