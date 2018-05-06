import {RECEIVE_ARTWORKS, ADD_ARTWORK} from '../actions/artworks'

const artworksReducer = (state =true, action) => {
    let newState = [...state]
    switch (action.type) {
        case RECEIVE_ARTWORKS:
            return action.artworks
        case ADD_ARTWORK:
            return [...newState, action.artworks]
        default:
            return state
    }
}


export default artworksReducer