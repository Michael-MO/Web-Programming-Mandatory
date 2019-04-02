import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts, selectedPostAction } from "../../actions";

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
              <th colSpan="2">
                <h5>Title</h5>
              </th>
              <th>
                <h5>Posted by</h5>
              </th>
              <th>
                <h5>Comments</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.posts.map(post => {
              return (
                <tr>
                  <td className="col-1 posts-icon">
                    <i className="fas fa-file pl-2 pr-4" />
                  </td>
                  <td className="col-7">
                    <Link
                      key={post.id}
                      className="text-info font-weight-bold"
                      to={"/posts/" + post.id}
                      onClick={() => this.props.selectedPostAction(post)}
                    >
                      {post.title}
                    </Link>
                    <br />
                    {post.body.slice(0, 40)}..
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
  { getPosts, selectedPostAction }
)(AllPosts);
