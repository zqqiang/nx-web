import React from 'react'
import { connect } from 'react-redux'
import { userLogin, googleUserLogin } from '../actions'
import LoginComponent from '../components/login.react'
import DB from '../../db/pouchdb'

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
            const user = googleUser.getBasicProfile().getName()
            DB.put({
                _id: new Date().toISOString(),
                user: user
            }, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    dispatch(googleUserLogin(user))
                }
            })
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent)

export default Login
