import { combineReducers } from "redux";
import MOVIES from "../assets/Movies";

const slctMovieItemRdcr = (slctMovieItem = MOVIES[0], action) => {
  if (action.type === "MOVIE_SELECTED") {
    return action.payload;
  }

  return slctMovieItem;
};

const getPostsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload.slice(0, 20);
    default:
      return state;
  }
};

const selectedPostReducer = (state = null, action) => {
  if (action.type === "SELECTED_POST") {
    return action.payload;
  }

  return state;
};

const getCommentsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return action.payload;
    default:
      return state;
  }
};

const getUsersReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USERS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  slctMovieItem: slctMovieItemRdcr,
  getPosts: getPostsReducer,
  selectedPost: selectedPostReducer,
  getComments: getCommentsReducer,
  getUsers: getUsersReducer
});
