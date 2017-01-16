import PouchDB from 'pouchdb'
import { browserHistory } from 'react-router'

const db = new PouchDB('nxmanager')

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

export const googleUserLogin = (googleUser) => {
    const user = googleUser.getBasicProfile().getName()

    db.put({
        _id: new Date().toISOString(),
        user: user
    }, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })

    browserHistory.push('/Home')

    return {
        type: 'USER_LOGIN',
        user: user
    }
}

export const loadLoginUsers = () => {

    return {
        type: 'LOAD_USERS',
        loginUsersCount: 100
    }
}