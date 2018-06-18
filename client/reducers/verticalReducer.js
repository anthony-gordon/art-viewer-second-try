import { MOVE_ARTWORK_UP, MOVE_ARTWORK_DOWN } from "../actions/positionchange";

const verticalReducer = (state = 30, action) => {
  switch (action.type) {
    case MOVE_ARTWORK_UP:
      return increaseVertical(action.vertical);
    case MOVE_ARTWORK_DOWN:
      return decreaseVertical(action.vertical);
    default:
      return state;
  }
};

export default verticalReducer;

// Note that to move the artwork up, the position number must decrease

function increaseVertical(vertical) {
  var next = vertical === 77 ? 2 : vertical - 1;
  return next;
}

function decreaseVertical(vertical) {
  var next = vertical === 77 ? 2 : vertical + 1;
  return next;
}
