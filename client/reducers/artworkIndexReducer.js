import {
  INCREASE_ARTWORK_INDEX,
  DECREASE_ARTWORK_INDEX
} from "../actions/artworks";

const artworkIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_ARTWORK_INDEX:
      return goUpThroughIndex(action.artworkIndex, action.artworks);
    case DECREASE_ARTWORK_INDEX:
      return goDownThroughIndex(action.artworkIndex, action.artworks);
    default:
      return state;
  }
};

export default artworkIndexReducer;

function goUpThroughIndex(num, array) {
  console.log("go up", num);
  var next = num == array.length - 1 ? 0 : num + 1;
  return next;
}

function goDownThroughIndex(num, array) {
  var previous = num == 0 ? array.length - 1 : num - 1;
  return previous;
}
