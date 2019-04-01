import jsonPlaceholder from "../apis/jsonPlaceholder";

export const slctMovieItem = movie => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie
  };
};

export const getPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("posts");
  dispatch({
    type: "GET_POSTS",
    payload: response.data
  });
};

export const selectedPost = post => {
  return {
    type: "SELECTED_POST",
    payload: post
  };
};

export const getComments = () => async dispatch => {
  const response = await jsonPlaceholder.get("comments");
  dispatch({
    type: "GET_COMMENTS",
    payload: response.data
  });
};

export const getusers = () => async dispatch => {
  const response = await jsonPlaceholder.get("users");
  dispatch({
    type: "GET_USERS",
    payload: response.data
  });
};
