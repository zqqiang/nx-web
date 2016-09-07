const Login = (state = {}, action) => {
    switch(action.type) {
        case 'USER_LOGIN':
            return {
                user: action.user,
                password: action.password
            }
        default:
            return state
    }
}

export default Login