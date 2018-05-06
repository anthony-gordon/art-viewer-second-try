import {INCREASE_INDEX, DECREASE_INDEX} from '../actions'

const indexReducer = (state = 0 , action) => {
    switch (action.type) {
        case INCREASE_INDEX:
            return goUpThroughIndex(action.index, action.backgrounds)
        case DECREASE_INDEX:
            return goDownThroughIndex(action.index, action.backgrounds)
        default:
            return state
    }
}


export default indexReducer

function goUpThroughIndex(num, array) {
    console.log("go up", num)

    var next = num == array.length -1 ? 0 : num +1 
    return next
}

function goDownThroughIndex(num, array) {
    var previous = num == 0 ? array.length-1 : num -1 
    return previous
}