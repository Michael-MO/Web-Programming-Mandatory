import { combineReducers } from "redux";
import MOVIES from "../assets/Movies";

const slctMovieItemRdcr = (slctMovieItem = MOVIES[0], action) => {
  if (action.type === "MOVIE_SELECTED") {
    return action.payload;
  }

  return slctMovieItem;
};

const getPostsRdcr = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  slctMovieItem: slctMovieItemRdcr,
  allPosts: getPostsRdcr
});
