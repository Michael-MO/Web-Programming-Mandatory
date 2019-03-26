import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <React.Fragment>
        <h3>Home</h3>
        <p>This is the home page..</p>
        {this.props.posts.map(post => {
          return (
            <React.Fragment>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.allPosts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Home);
