import {RECEIVE_BACKGROUNDS} from '../actions'

const backgroundsReducer = (state =true, action) => {
    switch (action.type) {
        case RECEIVE_BACKGROUNDS:
            return action.backgrounds
        default:
            return state
    }
}


export default backgroundsReducer