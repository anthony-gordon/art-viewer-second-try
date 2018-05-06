import {RECEIVE_ARTWORKS} from '../actions/artworks'

const artworksReducer = (state =true, action) => {
    switch (action.type) {
        case RECEIVE_ARTWORKS:
            return action.artworks
        default:
            return state
    }
}


export default artworksReducer