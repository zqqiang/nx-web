const Home = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return {
                loginUsersCount: action.loginUsersCount
            }
        default:
            return state
    }
}

export default Home
