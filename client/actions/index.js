import request from 'superagent'

export const REQUEST_BACKGROUNDS = 'REQUEST_BACKGROUNDS'
export const RECEIVE_BACKGROUNDS = 'RECEIVE_BACKGROUNDS'


export const requestBackgrounds = () => {
    return {
        type: REQUEST_BACKGROUNDS
    }
}

export const receiveBackgrounds = (backgrounds) => {
    console.log("receive", backgrounds)
    return {
        type: RECEIVE_BACKGROUNDS,
        backgrounds
    }
}

export function fetchBackgrounds () {
    return (dispatch => {
        dispatch(requestBackgrounds())
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