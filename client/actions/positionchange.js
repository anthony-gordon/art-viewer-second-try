import request from "superagent";

export const MOVE_ARTWORK_LEFT = "MOVE_ARTWORK_LEFT";
export const MOVE_ARTWORK_RIGHT = "MOVE_ARTWORK_RIGHT";
export const MOVE_ARTWORK_UP = "MOVE_ARTWORK_UP";
export const MOVE_ARTWORK_DOWN = "MOVE_ARTWORK_DOWN";
export const MOVE_ARTWORK_CENTRE = "MOVE_ARTWORK_CENTRE";

export function moveTheArtworkLeft(left) {
  return {
    type: MOVE_ARTWORK_LEFT,
    left
  };
}

export function moveTheArtworkRight(left) {
  return {
    type: MOVE_ARTWORK_RIGHT,
    left
  };
}

export function moveTheArtworkUp(vertical) {
  return {
    type: MOVE_ARTWORK_UP,
    vertical
  };
}

export function moveTheArtworkDown(vertical) {
  return {
    type: MOVE_ARTWORK_DOWN,
    vertical
  };
}

export function moveTheArtworkCentre(left) {
  return {
    type: MOVE_ARTWORK_CENTRE,
    left
  };
}
