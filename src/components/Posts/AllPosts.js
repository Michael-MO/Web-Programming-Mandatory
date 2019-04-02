import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts, getUsersAction, selectedPostAction } from "../../actions";

class AllPosts extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getUsersAction();
  }

  mergeArrays() {
    let newArray = [];

    this.props.posts.forEach(post => {
      this.props.users.forEach(user => {
        if (post.userId === user.id) {
          post.userName = user.name;
          newArray.push(post);
        }
      });
    });

    return newArray;
  }

  render() {
    return (
      <React.Fragment>
        <h3>Posts</h3>
        <table className="table table-striped mt-3 table-posts">
          <thead>
            <tr>
              <th>
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
            {this.mergeArrays().map(post => {
              return (
                <tr>
                  <td className="col-8 clearfix">
                    <div className="float-left">
                      <i className="fas fa-file posts-icon pl-2 pr-4" />
                    </div>
                    <div className="float-left">
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
                    </div>
                  </td>
                  <td className="col-2">{post.userName}</td>
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
    users: state.getUsers,
    selectedPost: state.selectedPost
  };
};

export default connect(
  mapStateToProps,
  { getPosts, getUsersAction, selectedPostAction }
)(AllPosts);
