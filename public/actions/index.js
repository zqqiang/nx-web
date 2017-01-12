import { browserHistory } from 'react-router'

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

const requestPosts = () => {
    return {
        type: 'REQUEST_POSTS'
    }
}

const receivePosts = (json) => {
    if ('success' === json.result) {
        browserHistory.push('/Home')
    }
    return {
        type: 'RECEIVE_POSTS',
        posts: json,
        receivedAt: Date.now()
    }
}

export const userLogin = (user, password) => {
    return (dispatch) => {
        dispatch(requestPosts())
        let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '',
                'Host': 'localhost'
            },
            body: JSON.stringify({
                'client_id': user,
                'client_secret': password,
                'grant_type': 'client_credentials'
            })
        }
        return fetch('/Login', options)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}

export const googleLogin = () => {
    return () => {
        // browserHistory.push('/GoogleLogin')
        console.log('Google Login');
    }
}
