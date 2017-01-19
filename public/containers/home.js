import React from 'react'
import { connect } from 'react-redux'
import { loadLoginUsers } from '../actions'
import HomeComponent from '../components/home.react'
import DB from '../../db/pouchdb'

const mapStateToProps = (state) => {
    return {
        loginUsersCount: state.home.loginUsersCount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadLoginUsers: () => {
            DB.allDocs()
                .then((result) => {
                    dispatch(loadLoginUsers(result.total_rows))
                }).then((err) => {
                    if (err) console.log(err)
                })
        }
    }
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)

export default Home
