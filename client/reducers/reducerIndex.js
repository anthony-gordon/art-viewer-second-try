import { combineReducers } from "redux";
import backgroundsReducer from "./backgroundsReducer";
import indexReducer from "./indexReducer";
import artworksReducer from "./artworksReducer";
import leftReducer from "./leftReducer";
import verticalReducer from "./verticalReducer";
import artworkIndexReducer from "./artworkIndexReducer";
import artworkSizeReducer from "./artworkSizeReducer";

export default combineReducers({
  backgrounds: backgroundsReducer,
  index: indexReducer,
  artworks: artworksReducer,
  artworkIndex: artworkIndexReducer,
  left: leftReducer,
  vertical: verticalReducer,
  width: artworkSizeReducer
});
