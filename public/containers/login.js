import React from 'react'
import { connect } from 'react-redux'
import { userLogin, googleLogin } from '../actions'
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
        onHandleGoogleClick: () => {
            dispatch(googleLogin())
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent)

export default Login
