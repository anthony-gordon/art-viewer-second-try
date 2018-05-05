import {combineReducers} from 'redux'
import backgroundsReducer from './backgroundsReducer'
import indexReducer from './indexReducer'

export default combineReducers({
    backgrounds:backgroundsReducer,
    index: indexReducer
})