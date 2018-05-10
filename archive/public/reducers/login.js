const Login = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                user: action.user,
                password: action.password
            }
        case 'REQUEST_POSTS':
            return {
                isFetching: true,
                didInvalidate: false
            }
        case 'RECEIVE_POSTS':
            return {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

export default Login
