import React, { PropTypes } from 'react'

const LoginForm = ({onHandleChange}) => {
	<div className="">
		<div className="form-group has-feedback">
			<input type="email" className="form-control" placeholder="Email" onChange={onHandleChange} />
			<span className="glyphicon glyphicon-envelope form-control-feedback"></span>
		</div>
		<div className="form-group has-feedback">
			<input type="password" className="form-control" placeholder="Password" />
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
				<a href="#Home" className="btn btn-primary btn-block btn-flat">Sign In</a>
			</div>
		</div>
	</div>
}

LoginForm.propTypes = {
	onHandleChange: PropTypes.func.isRequired
}

const LoginBoxBody = ({onHandleChange}) => {
	<div className="login-box-body">
		<p className="login-box-msg">Sign in to start your session</p>
		<LoginForm onHandleChange={onHandleChange} />

		<div className="social-auth-links text-center">
			<p>- OR -</p>
			<a href="javascript:void(0);" className="btn btn-block btn-social btn-facebook btn-flat">
				<i className="fa fa-facebook"></i> Sign in using Facebook
			</a>
			<a href="javascript:void(0);" className="btn btn-block btn-social btn-google btn-flat">
				<i className="fa fa-google-plus"></i> Sign in using Google+
			</a>
			<a href="javascript:void(0);" className="btn btn-block btn-social btn-wechat btn-flat">
				<i className="fa fa-weixin"></i> Sign in using Wechat
			</a>
		</div>

		<a href="javascript:void(0);">I forgot my password</a><br />
		<a href="javascript:void(0);" className="text-center">Register a new membership</a>

	</div>
}

const LoginBody = ({onHandleChange}) => {
	return (
		<div className="login-box">
			<div className="login-logo">
				<a href="javascript:void(0);"><b>nx</b>Manager</a>
			</div>
			<LoginBoxBody onHandleChange={onHandleChange} />
		</div>
	)
}

const Login = ({onHandleChange}) => {
	<div className="lockscreen">
		<div className="lockscreen-wrapper">
			<LoginBody onHandleChange={onHandleChange} />
		</div>
	</div>
}

export default Login