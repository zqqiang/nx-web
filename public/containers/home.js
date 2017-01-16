import React from 'react'
import { connect } from 'react-redux'
import { loadLoginUsers } from '../actions'
import HomeComponent from '../components/home.react'

const mapStateToProps = (state) => {
    return {
        loginUsersCount: state.home.loginUsersCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadLoginUsers: () => {
            dispatch(loadLoginUsers())
        }
    }
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)

export default Home
