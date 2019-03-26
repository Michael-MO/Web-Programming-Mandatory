import jsonPlaceholder from "../apis/jsonPlaceholder";

export const slctMovieItem = movie => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie
  };
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};
