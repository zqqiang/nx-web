import React from 'react'
import { connect } from 'react-redux'
// import { googleLogin } from '../actions'
import Google from '../components/google.react'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleClick: () => {
            // dispatch(googleLogin())
        }
    }
}

const GoogleLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Google)

export default GoogleLogin
