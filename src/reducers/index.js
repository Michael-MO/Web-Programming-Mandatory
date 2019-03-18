import { combineReducers } from "redux";
import MOVIES from "../assets/Movies";

const slctMovieItemRdcr = (slctMovieItem = MOVIES[0], action) => {
  if (action.type === "MOVIE_SELECTED") {
    return action.payload;
  }

  return slctMovieItem;
};

export default combineReducers({
  slctMovieItem: slctMovieItemRdcr
});
