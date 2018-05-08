import request from 'superagent'

export const MOVE_ARTWORK_LEFT = 'MOVE_ARTWORK_LEFT'
export const MOVE_ARTWORK_RIGHT = 'MOVE_ARTWORK_RIGHT'
export const MOVE_ARTWORK_CENTRE = 'MOVE_ARTWORK_CENTRE'


export function moveTheArtworkLeft (left){
    return {
        type: MOVE_ARTWORK_LEFT,
        left
    }
}

export function moveTheArtworkRight (left){
    return {
        type: MOVE_ARTWORK_RIGHT,
        left
    }
}

export function moveTheArtworkCentre (left){
    return {
        type: MOVE_ARTWORK_CENTRE,
        left
    }
}


