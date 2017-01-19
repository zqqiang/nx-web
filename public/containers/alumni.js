import React from 'react'
import { connect } from 'react-redux'
import {} from '../actions'
import AlumniComponent from '../components/alumni.react'

const mapStateToProps = (state) => {
    return {
        user: state.login.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const Alumni = connect(
    mapStateToProps,
    mapDispatchToProps
)(AlumniComponent)

export default Alumni
