import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-film" />
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
