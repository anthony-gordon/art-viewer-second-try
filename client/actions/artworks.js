import request from 'superagent'

export const RECEIVE_ARTWORKS = 'RECEIVE_ARTWORKS'
export const INCREASE_ARTWORK_INDEX = 'INCREASE_ARTWORK_INDEX'
export const DECREASE_ARTWORK_INDEX = 'DECREASE_ARTWORK_INDEX'

export function increaseTheArtworkIndex (artworkIndex, artworks){
    return {
        type: INCREASE_ARTWORK_INDEX,
        artworkIndex,
        artworks
    }
}

export function decreaseTheArtworkIndex (artworkIndex, artworks){
    return {
        type: DECREASE_ARTWORK_INDEX,
        artworkIndex,
        artworks
    }
}

export const receiveArtworks = (artworks) => {
    return {
        type: RECEIVE_ARTWORKS,
        artworks
    }
}

export function fetchArtworks () {
    return (dispatch => {
        return request
        .get('/api/v2')
        .then(res => {
            dispatch(receiveArtworks(res.body))
        })
        .catch(err => {
            console.error(err.message)
        })
    })
}
