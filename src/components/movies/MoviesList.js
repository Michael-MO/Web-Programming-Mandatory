import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { selectMovieAction } from "../../actions";
import MOVIES from "../../assets/Movies";
import { convertToURL } from "../../utils";

const MoviesList = props => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">Selection</div>
        <ul className="list-group list-group-flush nav flex-column">
          {MOVIES.map(movie => {
            return (
              <li className="list-group-item nav-item">
                <NavLink
                  className="nav-link text-info"
                  to={"/movies/" + convertToURL(movie.Title)}
                  role="tab"
                  key={movie.Title}
                  onClick={() => props.selectMovieAction(movie)}
                >
                  <i className="fas fa-angle-right pr-3" />
                  {movie.Title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  // return { movie: state.selectedMovie };
};

export default connect(
  mapStateToProps,
  { selectMovieAction }
)(MoviesList);
