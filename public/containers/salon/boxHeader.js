import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/salon/boxHeader.react'

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        comment: state.salon.comment
    }
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
