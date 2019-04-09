import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPostsAction,
  getUsersAction,
  getCommentsAction,
  selectPostAction
} from "../../actions";

class AllPosts extends Component {
  componentDidMount() {
    this.props.getPostsAction();
    this.props.getUsersAction();
    this.props.getCommentsAction();
  }

  // I am uncertain of this approach.
  // But currently don't see any other way, to create a correlation between two 'tables' of data.
  doCorrelationsArray() {
    let newArray = [];

    this.props.posts.forEach(post => {
      this.props.users.forEach(user => {
        if (post.userId === user.id) {
          post.userName = user.name;
          post.comments = this.props.comments.filter(comment => {
            return comment.postId === post.id;
          });
          newArray.push(post);
        }
      });
    });

    return newArray;
  }

  renderTableData() {
    return this.doCorrelationsArray().map(post => {
      return (
        <tr>
          <td className="no-stretch">
            <i className="far fa-comments posts-icon pl-2" />
          </td>
          <td>
            <Link
              key={post.id}
              className="text-info font-weight-bold"
              to={"/posts/" + post.id}
              onClick={() => this.props.selectPostAction(post)}
            >
              {post.title}
            </Link>
            <br />
            {post.body.slice(0, 40)}..
          </td>
          <td className="col-2 d-none d-md-table-cell">{post.userName}</td>
          <td className="col-2 d-none d-md-table-cell">
            {post.comments.length}
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="mb-4">Posts</h3>
        <table className="table mt-3 table-posts">
          <thead>
            <tr>
              <th colSpan="2">
                <h5>Title</h5>
              </th>
              <th className="d-none d-md-table-cell">
                <h5>Posted by</h5>
              </th>
              <th className="d-none d-md-table-cell">
                <h5>Comments</h5>
              </th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.getPosts,
    users: state.getUsers,
    comments: state.getComments
  };
};

export default connect(
  mapStateToProps,
  { getPostsAction, getUsersAction, getCommentsAction, selectPostAction }
)(AllPosts);
