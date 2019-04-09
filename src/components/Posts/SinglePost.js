import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCommentsByIdAction } from "../../actions";

class SinglePost extends Component {
  componentDidMount() {
    //this.props.getCommentsByIdAction(this.props.selectedPost.id);
  }

  render() {
    return (
      <React.Fragment>
        <Link className="btn btn-primary mb-4" to="/posts">
          Back
        </Link>
        <h3>{this.props.selectedPost.title}</h3>
        <i>Posted by {this.props.selectedPost.userName}</i>
        <hr />
        <p className="mt-3">{this.props.selectedPost.body}</p>
        <hr />
        <h5 className="mb-5">
          Comments ({this.props.selectedPost.comments.length}){" "}
          <i class="far fa-comment-dots" />
        </h5>
        <ul className="list-unstyled">
          {this.props.selectedPost.comments.map(comment => {
            return (
              <li key={comment.id} className="media mb-3 col-md-10">
                <img
                  src="https://via.placeholder.com/75"
                  className="rounded-circle mr-4 d-none d-sm-block"
                  alt="..."
                />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">{comment.name}</h5>
                  {comment.body}
                </div>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPost: state.selectedPost,
    comments: state.getCommentsById
  };
};

export default connect(
  mapStateToProps,
  { getCommentsByIdAction }
)(SinglePost);
