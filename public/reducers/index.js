import { combineReducers } from 'redux'
import salon from './salon'
import chats from './chats'

const reducers = combineReducers({
    salon,
    chats
})

export default reducers
