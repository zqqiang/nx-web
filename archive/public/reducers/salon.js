const salon = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return {
                comment: action.comment
            }
        default:
            return state
    }
}

export default salon
