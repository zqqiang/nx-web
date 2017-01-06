import React, { PropTypes } from 'react'

class Google extends React.Component {
	componentWillMount() {
        const script = document.createElement("script");

        script.src = "https://apis.google.com/js/platform.js";
        script.async = true;

        document.body.appendChild(script);
	}
	componentDidMount() {
		gapi.signin2.render('g-signin2', {
			'scope': 'profile email',
			'width': 200,
			'height': 50,
			'longtitle': true,
			'theme': 'dark',
			'onsuccess': this.onSignIn
		});
	}
	render() {
	    return (
	        <div className="login-page">
		        <div className="login-box">
					<div className="login-logo">
	            		<a href="javascript:void(0);"><b>nx</b>-manager</a>
	        		</div>
	        		<div className="login-box-body">
		            	<div className="g-signin2"></div>
	        		</div>
		        </div>
	        </div>
	    )
	}
	onSignIn(googleUser) {
		console.log("googleUser Login");
	}
}

export default Google