import {
  MOVE_ARTWORK_LEFT,
  MOVE_ARTWORK_RIGHT,
  MOVE_ARTWORK_CENTRE
} from "../actions/positionchange";

const leftReducer = (state = 50, action) => {
  switch (action.type) {
    case MOVE_ARTWORK_LEFT:
      return decreaseLeft(action.left);
    case MOVE_ARTWORK_RIGHT:
      return increaseLeft(action.left);
    case MOVE_ARTWORK_CENTRE:
      return 50;
    default:
      return state;
  }
};

export default leftReducer;

function decreaseLeft(left) {
  var next = left === 2 ? 77 : left - 1;
  return next;
}

function increaseLeft(left) {
  var next = left === 77 ? 2 : left + 1;
  return next;
}
