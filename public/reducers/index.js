import { combineReducers } from 'redux'
import salon from './salon'
import chats from './chats'
import login from './login'

const reducers = combineReducers({
    salon,
    chats,
    login
})

export default reducers
