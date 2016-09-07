import { connect } from 'react-redux'
import { userLogin } from '../actions'
import LoginComponent from '../components/login.react'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleChange: (event) => {
            dispatch(userLogin(event.target.value))
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent)

export default Login