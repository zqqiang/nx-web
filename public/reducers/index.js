import { combineReducers } from 'redux'
import salon from './salon'
import chat from './chat'

const reducers = combineReducers({
    salon,
    chat
})

export default reducers
