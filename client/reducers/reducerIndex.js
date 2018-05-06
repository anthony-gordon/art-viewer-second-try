import {combineReducers} from 'redux'
import backgroundsReducer from './backgroundsReducer'
import indexReducer from './indexReducer'
import artworksReducer from './artworksReducer'
import artworkIndexReducer from './artworkIndexReducer'


export default combineReducers({
    backgrounds:backgroundsReducer,
    index: indexReducer,
    artworks: artworksReducer,
    artworkIndex: artworkIndexReducer
})