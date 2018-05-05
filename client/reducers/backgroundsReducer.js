import {RECIEVE_BACKGROUNDS} from '../actions'

const backgroundReducer = (state =true, action) => {
    switch (action.type) {
        case RECIEVE_BACKGROUNDS:
        return action.animals
        default:
        return state
    }
}

export default backgroundReducer