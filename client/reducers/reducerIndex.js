import {combineReducers} from 'redux'
import backgroundsReducer from './backgroundsReducer'

export default combineReducers({
    backgrounds:backgroundsReducer
})