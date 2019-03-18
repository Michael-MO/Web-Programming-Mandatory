import React from "react";
import { connect } from "react-redux";
import { slctMovieItem } from "../../actions";

const MoviesDetails = props => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            {props.movie.Title + " (" + props.movie.Year + ")"}
          </h4>
          <p className="card-text">
            Genre: {props.movie.Genre} <br />
            Actors: {props.movie.Actors}
          </p>
          <hr />
          <p className="card-text">
            <h6>Description:</h6>
            {props.movie.Plot}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { movie: state.slctMovieItem };
};

export default connect(
  mapStateToProps,
  { slctMovieItem }
)(MoviesDetails);
