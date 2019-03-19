import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { slctMovieItem } from "../../actions";
import MOVIES from "../../assets/Movies";
import { convertToURL } from "../../util";

const MoviesList = props => {
  return (
    <React.Fragment>
      <div className="card">
        <div class="card-header">Selection</div>
        <ul className="list-group list-group-flush nav flex-column">
          {MOVIES.map(movie => {
            return (
              <li class="list-group-item nav-item">
                <NavLink
                  className="nav-link text-danger"
                  to={"/movies/" + convertToURL(movie.Title)}
                  role="tab"
                  key={movie.Title}
                  onClick={() => props.slctMovieItem(movie)}
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
  return { movie: state.slctMovieItem };
};

export default connect(
  mapStateToProps,
  { slctMovieItem }
)(MoviesList);
