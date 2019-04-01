import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPosts, selectedPost } from "../../actions";

class AllPosts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <React.Fragment>
        <h3>Posts</h3>
        <table className="table table-striped mt-3 table-posts">
          <thead>
            <tr>
              <th colSpan="2">Title</th>
              <th>Posted by</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {this.props.posts.map(post => {
              return (
                <tr>
                  <td className="col-1 posts-icon">
                    <i class="fas fa-file pl-2 pr-4" />
                  </td>
                  <td className="col-7">
                    <NavLink
                      className="text-info font-weight-bold"
                      to={"/posts/" + post.id}
                      onClick={() => this.props.selectedPost(post)}
                    >
                      {post.title}
                    </NavLink>
                    <br />
                    <small>{post.body.slice(0, 40)}..</small>
                  </td>
                  <td className="col-2">{post.userId}</td>
                  <td className="col-2">0</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.getPosts,
    selectedPost: state.selectedPost
  };
};

export default connect(
  mapStateToProps,
  { getPosts, selectedPost }
)(AllPosts);
