import { connect } from 'react-redux'
import { salon } from '../components/salon.react'

const mapStateToProps = (state) => {
    return {
        comment: state.comment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

console.log(salon);

const Salon = connect(
    mapStateToProps,
    mapDispatchToProps
)(salon);
