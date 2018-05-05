import request from 'superagent'

export const RECEIVE_BACKGROUNDS = 'RECEIVE_BACKGROUNDS'
export const INCREASE_INDEX = 'INCREASE_INDEX'
export const DECREASE_INDEX = 'DECREASE_INDEX'

export function increaseTheIndex (index, backgrounds){
    return {
        type: INCREASE_INDEX,
        index,
        backgrounds
    }
}

export function decreaseTheIndex (index, backgrounds){
    return {
        type: DECREASE_INDEX,
        index,
        backgrounds
    }
}

export const receiveBackgrounds = (backgrounds) => {
    return {
        type: RECEIVE_BACKGROUNDS,
        backgrounds
    }
}

export function fetchBackgrounds () {
    return (dispatch => {
        return request
        .get('/api/v1')
        .then(res => {
            dispatch(receiveBackgrounds(res.body))
        })
        .catch(err => {
            console.error(err.message)
        })
    })
}
