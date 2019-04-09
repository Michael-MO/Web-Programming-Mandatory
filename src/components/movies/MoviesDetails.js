import React from "react";
import { connect } from "react-redux";

const MoviesDetails = props => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            {props.selectedMovie.Title + " (" + props.selectedMovie.Year + ")"}
          </h4>
          <p className="card-text">
            <strong>Genre:</strong> {props.selectedMovie.Genre} <br />
            <strong>Actors:</strong> {props.selectedMovie.Actors}
          </p>
          <hr />
          <p className="card-text">
            <h6>Description:</h6>
            {props.selectedMovie.Plot}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { selectedMovie: state.selectedMovie };
};

export default connect(mapStateToProps)(MoviesDetails);
