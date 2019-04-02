import React from "react";

const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4 font-weight-bold">JSONPlaceholder</h1>
      <p className="lead">
        This Web App utilizes React, React-Redux, Redux, Redux-thunk, Axios
      </p>
      <hr className="my-4" />
      <p>
        This mandatory project, uses '
        <a href="https://jsonplaceholder.typicode.com/" target="blank">
          https://jsonplaceholder.typicode.com/
        </a>
        's api for fetching Users, Posts and Comments information.
      </p>
    </div>
  );
};

export default Home;
