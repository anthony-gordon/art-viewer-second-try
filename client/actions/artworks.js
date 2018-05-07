import request from 'superagent'

export const RECEIVE_ARTWORKS = 'RECEIVE_ARTWORKS'
export const INCREASE_ARTWORK_INDEX = 'INCREASE_ARTWORK_INDEX'
export const DECREASE_ARTWORK_INDEX = 'DECREASE_ARTWORK_INDEX'
export const ADD_ARTWORK = 'ADD_ARTWORK'
export const DELETE_ARTWORK = 'DELETE_ARTWORK'


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
export const deleteArtwork = (artwork) => {
    return {
        type: DELETE_ARTWORK,
        artwork
    }
}

export const addArtwork = (artwork) => {
    return {
        type:'ADD_ARTWORK',
        artwork
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

export function postArtworkRequest (artwork) {
    return dispatch => {
        request
            .post('/api/v2')
            .send(artwork)
            .end((err, res) => {
                if (err){
                    console.log(err.message)
                    return
                }
                dispatch(addArtwork(res.body))
            })
    }
}

export function deleteArtworkRequest (artwork) {
    console.log(artwork)
    return (dispatch) => {
        request
            .delete('/api/v2/'+ artwork.id
            )
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    return
                }
                dispatch(deleteArtwork(artwork))
            })
    }
}