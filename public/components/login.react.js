import React, { PropTypes } from 'react'

const LoginForm = ({ onHandleClick }) => {
    let user
    let password

    return (
        <div className="">
            <div className="form-group has-feedback">
                <input type="email" className="form-control" placeholder="Email" ref={node => {user = node}} />
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
                <input type="password" className="form-control" placeholder="Password" ref={node => {password = node}} />
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
                <div className="col-xs-8">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" /> Remember Me
                        </label>
                    </div>
                </div>
                <div className="col-xs-4">
                    <a href="javascript:void(0);" className="btn btn-primary btn-block btn-flat" onClick={ e => {
                        e.preventDefault()
                        if (!user.value.trim()) return
                        if (!password.value.trim()) return
                        onHandleClick(user.value, password.value);
                        user.value = ''
                        password.value = ''
                    }} >Sign In</a>
                </div>
            </div>
        </div>
    )
}

LoginForm.propTypes = {
    onHandleClick: PropTypes.func.isRequired
}

const LoginBoxBody = ({ onHandleClick }) => (
    <div className="login-box-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <LoginForm onHandleClick={onHandleClick} />

        <div className="social-auth-links text-center">
            <p>- OR -</p>
            <div id="google-signin"></div>
            <a href="javascript:void(0);" className="btn btn-block btn-social btn-wechat btn-flat" >
                <i className="fa fa-weixin"></i> Sign in using Wechat
            </a>
        </div>

        <a href="javascript:void(0);">I forgot my password</a><br />
        <a href="javascript:void(0);" className="text-center">Register a new membership</a>

    </div>
)

const LoginBody = ({ onHandleClick }) => (
    <div className="login-box">
        <div className="login-logo">
            <a href="javascript:void(0);"><b>nx</b>-manager</a>
        </div>
        <LoginBoxBody onHandleClick={onHandleClick} />
    </div>
)

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const loginSuccess = this.props.onHandleGoogleLogin;
        const fjs = document.getElementsByTagName('script')[0];
        let js = fjs;
        js = document.createElement('script');
        js.src = '//apis.google.com/js/client:platform.js';
        fjs.parentNode.insertBefore(js, fjs);
        js.onload = function() {
            window.gapi.load('auth2', () => {
                window.gapi.auth2.init({
                    client_id: '556944696832-pmg36d0kb3rlm6ntcljq3pt94cefhpb9.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin'
                }).then(() => {
                    let element = document.getElementById('google-signin');
                    let auth2 = window.gapi.auth2.getAuthInstance();
                    auth2.attachClickHandler(element, {}, loginSuccess, (error) => {
                        console.log(error);
                    });
                })
                window.gapi.signin2.render('google-signin', {
                    'scope': 'profile email',
                    'width': 320,
                    'height': 34,
                    'longtitle': true,
                    'theme': 'dark',
                });
            })
        };
    }
    render() {
        return (
            <div className="login-page">
                <LoginBody 
                    onHandleClick={this.props.onHandleClick} 
                />
            </div>
        )
    }
}

export default LoginComponent
