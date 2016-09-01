import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/salon/boxHeader.react'

const mapStateToProps = (state, ownProps) => {
    return state.salon
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {}
    }
}

const BoxHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default BoxHeader
