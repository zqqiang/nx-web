import { connect } from 'react-redux'
import { addComment } from '../actions'
import Salon from '../components/salon.react'

const mapStateToProps = (state) => {
    return {
        comment: 'hello'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(addComment())
        }
    }
}

const SalonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Salon)

export default SalonContainer
