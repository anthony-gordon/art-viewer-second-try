import {
  RECEIVE_BACKGROUNDS,
  ADD_BACKGROUND,
  DELETE_BACKGROUND
} from "../actions";

const backgroundsReducer = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case RECEIVE_BACKGROUNDS:
      return action.backgrounds;
    case ADD_BACKGROUND:
      return [...newState, action.backgrounds];
    case DELETE_BACKGROUND:
      return [...newState].filter(
        background => background != action.background
      );
    default:
      return state;
  }
};

export default backgroundsReducer;
