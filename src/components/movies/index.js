import React from "react";
import MoviesList from "./MoviesList";
import MoviesDetails from "./MoviesDetails";
import { Switch, Route } from "react-router-dom";

const Movies = () => {
  return (
    <React.Fragment>
      <h3 className="mb-4">Movies</h3>
      <div className="row">
        <div className="col-3">
          <MoviesList />
        </div>
        <div className="col-9">
          <Switch>
            <Route path="/movies/:string" component={MoviesDetails} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Movies;
