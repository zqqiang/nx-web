export const addComment = (comment) => {
    return {
        type: 'ADD_COMMENT',
        comment: comment
    }
}

export const postMessage = (message, type) => {
    return {
        type: type,
        message: message
    }
}

export const userLogin = (user) => {
    return {
        type: 'USER_LOGIN',
        user
    }
}