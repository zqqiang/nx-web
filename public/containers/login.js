import React from 'react'
import { connect } from 'react-redux'
import { userLogin, googleUserLogin } from '../actions'
import LoginComponent from '../components/login.react'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleClick: (user, password) => {
            dispatch(userLogin(user, password))
        },
        onHandleGoogleLogin: (googleUser) => {
        	dispatch(googleUserLogin(googleUser))
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent)

export default Login
