import { combineReducers } from 'redux'
import salon from './salon'
import chats from './chats'
import login from './login'
import home from './home'

const reducers = combineReducers({
    salon,
    chats,
    login,
    home
})

export default reducers
