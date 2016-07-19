const salon = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_LANG':
            return {
                language: action.language
            }
        default:
            return state
    }
}

export default salon
