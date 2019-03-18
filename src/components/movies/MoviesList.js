import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { slctMovieItem } from "../../actions";
import MOVIES from "../../assets/Movies";

const MoviesList = props => {
  return (
    <React.Fragment>
      <div className="card">
        <ul className="list-group list-group-flush nav flex-column">
          {MOVIES.map(movie => {
            return (
              <li class="nav-item">
                <Link
                  className="list-group-item nav-link text-danger"
                  to="#"
                  role="tab"
                  key={movie.Title}
                  onClick={() => props.slctMovieItem(movie)}
                >
                  {movie.Title}
                </Link>
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
