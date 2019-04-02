import React from "react";
import AllPosts from "./AllPosts";
import SinglePost from "./SinglePost";
import { Switch, Route } from "react-router-dom";

const Posts = () => {
  return (
    <Switch>
      <Route exact path="/posts" component={AllPosts} />
      <Route exact path="/posts/:int" component={SinglePost} />
    </Switch>
  );
};

export default Posts;
