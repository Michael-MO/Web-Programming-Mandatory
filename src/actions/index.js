import jsonPlaceholder from "../apis/jsonPlaceholder";

export const slctMovieItem = movie => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie
  };
};

export const getPostsAction = () => async dispatch => {
  const response = await jsonPlaceholder.get("posts");
  dispatch({
    type: "GET_POSTS",
    payload: response.data
  });
};

export const selectedPostAction = post => {
  return {
    type: "SELECTED_POST",
    payload: post
  };
};

export const getCommentsByIdAction = postId => async dispatch => {
  const response = await jsonPlaceholder.get("comments?postId=" + postId);
  dispatch({
    type: "GET_COMMENTS_BY_ID",
    payload: response.data
  });
};

export const getCommentsAction = () => async dispatch => {
  const response = await jsonPlaceholder.get("comments");
  dispatch({
    type: "GET_COMMENTS",
    payload: response.data
  });
};

export const getUsersAction = () => async dispatch => {
  const response = await jsonPlaceholder.get("users");
  dispatch({
    type: "GET_USERS",
    payload: response.data
  });
};
