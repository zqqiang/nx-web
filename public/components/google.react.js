import React, { PropTypes } from 'react'
import GoogleLogin from 'react-google-login'

const buttonStyle = {
  display: 'inline-block',
  background: 'white',
  color: '#444',
  borderRadius: '5px',
  border: 'thin solid #888',
  boxShadow: '1px 1px 1px grey',
  whiteSpace: 'nowrap',
  flexGrow:'1',
}

const googleContainer = {
    display: 'flex',
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
                    <div style={googleContainer}>
                        <GoogleLogin
                            clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            offline={false}
                            style={buttonStyle}
                        >
                            <span className="icon"></span>
                            <span className="buttonText">Google</span>
                        </GoogleLogin>
                    </div>
                </div>
            </div>
        )
    }
}

export default Google