import {
  MAKE_ARTWORK_BIGGER,
  MAKE_ARTWORK_SMALLER
} from "../actions/artworkSize";

const artworkSizeReducer = (state = 200, action) => {
  switch (action.type) {
    case MAKE_ARTWORK_BIGGER:
      console.log("reducer", action.width);
      return increaseWidth(action.width);
    case MAKE_ARTWORK_SMALLER:
      console.log("reducer", action.width);
      return decreaseWidth(action.width);
    default:
      return state;
  }
};

export default artworkSizeReducer;

// Note that to move the artwork up, the position number must decrease

function increaseWidth(width) {
  console.log("increaser", width);
  var next = width + 5;
  if (width > 400) {
    return 400;
  } else return next;
}

function decreaseWidth(width) {
  console.log("decrease", width);
  var next = width - 5;
  if (width < 50) {
    return 50;
  } else return next;
}
