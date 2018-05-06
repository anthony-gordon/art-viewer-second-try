import {RECEIVE_BACKGROUNDS, ADD_BACKGROUND} from '../actions'

const backgroundsReducer = (state =true, action) => {
    let newState = [...state]
    switch (action.type) {
        case RECEIVE_BACKGROUNDS:
            return action.backgrounds
        case ADD_BACKGROUND:
            return [...newState, action.backgrounds]
        default:
            return state
    }
}


export default backgroundsReducer