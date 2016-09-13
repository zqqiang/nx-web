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

export const userLogin = (user, password) => {
    return {
        type: 'USER_LOGIN',
        user,
        password
    }
}