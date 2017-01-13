import React from 'react'
import { connect } from 'react-redux'
import {} from '../actions'
import HomeComponent from '../components/home.react'

const mapStateToProps = (state) => {
    console.log(state)
    return {
        loginCount: state.loginCount
    }
}

const Home = connect(
    mapStateToProps
)(HomeComponent)

export default Home
