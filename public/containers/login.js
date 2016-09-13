import React from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../actions'
import LoginComponent from '../components/login.react'

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleClick: (user, password) => {
            dispatch(userLogin(user, password))
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent)

export default Login