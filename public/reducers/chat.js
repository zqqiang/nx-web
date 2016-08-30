const chat = (state = {}, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                message: action.message
            }
        default:
            return state
    }
}

export default chat
