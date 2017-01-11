import React, { PropTypes } from 'react'
import GoogleLogin from 'react-google-login'

const buttonStyle = {
    display:'inline-block',
    background:'#d14836',
    color:'#fff',
    width:'190px',
    paddingTop:'10px',
    paddingBottom:'10px',
    borderRadius:'2px',
    border:'1px solid transparent',
    fontSize:'16px',
    fontWeight:'bold',
    fontFamily:'Roboto'
}

class Google extends React.Component {
    responseGoogle(response) {
        console.log(response);
    }
    render() {
        return (
            <div className="login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="javascript:void(0);"><b>nx</b>-manager</a>
                    </div>
                    <div className="login-box-body">
                    <div id="customBtn" className="customGPlusSignIn">
                        <GoogleLogin
                            clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            offline={false}
                        >
                            <span className="icon"></span>
                            <span className="buttonText">Google</span>
                        </GoogleLogin>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Google