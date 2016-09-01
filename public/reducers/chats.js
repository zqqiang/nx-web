const chat = (state = {}, action) => {
    switch (action.type) {
        case 'POST_MESSAGE':
            return {
                direction: 'left',
                rdirection: 'right',
                name: 'Alexander Pierce',
                time: '23 Jan 2:00 pm',
                img: 'user1-128x128.jpg',
                text: action.message
            }
        case 'ADD_MESSAGE':
            return {
                direction: 'right',
                rdirection: 'left',
                name: 'Sarah Bullock',
                time: '23 Jan 2:05 pm',
                img: 'user3-128x128.jpg',
                text: action.message
            }
        default:
            return state
    }
}

const chats = (state = [], action) => {
    switch (action.type) {
        case 'POST_MESSAGE':
            return [
                ...state,
                chat(undefined, action)
            ]
        case 'ADD_MESSAGE':
            return [
                ...state,
                chat(undefined, action)
            ]
        default:
            return state
    }
}

export default chats
