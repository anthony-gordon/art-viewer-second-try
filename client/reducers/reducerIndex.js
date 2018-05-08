import {combineReducers} from 'redux'
import backgroundsReducer from './backgroundsReducer'
import indexReducer from './indexReducer'
import artworksReducer from './artworksReducer'
import artworkIndexReducer from './artworkIndexReducer'
import leftReducer from './leftReducer'


export default combineReducers({
    backgrounds:backgroundsReducer,
    index: indexReducer,
    artworks: artworksReducer,
    artworkIndex: artworkIndexReducer,
    left: leftReducer
})