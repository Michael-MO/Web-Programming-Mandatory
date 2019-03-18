import React from "react";
import { connect } from "react-redux";
import { slctMovieItem } from "../../actions";

const MoviesDetails = props => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{props.movie.Title}</h3>
          {props.movie.Plot}
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
