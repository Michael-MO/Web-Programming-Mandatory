import React from "react";

const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">JSONPlaceholder</h1>
      <p className="lead">
        This Web App utilizes React, React-Redux, Redux, Redux-thunk, Axios
      </p>
      <hr className="my-4" />
      <p>
        This mandatory project, uses 'https://jsonplaceholder.typicode.com/'s
        api for fetching Users, Posts and Comments information.
      </p>
    </div>
  );
};

export default Home;
