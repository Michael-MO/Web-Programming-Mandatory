import React from "react";
import MoviesList from "./MoviesList";
import MoviesDetails from "./MoviesDetails";

const Movies = () => {
  return (
    <React.Fragment>
      <h2 className="mb-4">Movies</h2>
      <div className="row">
        <div className="col-3">
          <MoviesList />
        </div>
        <div className="col-9">
          <MoviesDetails />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Movies;
