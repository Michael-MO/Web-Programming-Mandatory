import { combineReducers } from "redux";
import MOVIES from "../assets/Movies";

const selectMovieReducer = (state = MOVIES[0], action) => {
  if (action.type === "SELECT_MOVIE") {
    return action.payload;
  }
  return state;
};

const getPostsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload.slice(5, 15);
    default:
      return state;
  }
};

const selectPostReducer = (state = null, action) => {
  if (action.type === "SELECT_POST") {
    return action.payload;
  }
  return state;
};

const getCommentsByIdReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COMMENTS_BY_ID":
      return action.payload;
    default:
      return state;
  }
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
  selectedMovie: selectMovieReducer,
  getPosts: getPostsReducer,
  selectedPost: selectPostReducer,
  getCommentsById: getCommentsByIdReducer,
  getComments: getCommentsReducer,
  getUsers: getUsersReducer
});
