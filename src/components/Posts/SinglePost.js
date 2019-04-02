import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectedPostAction, getCommentsAction } from "../../actions";

class SinglePost extends Component {
  componentDidMount() {
    this.props.getCommentsAction(this.props.selectedPost.id);
  }

  render() {
    return (
      <React.Fragment>
        <Link className="btn btn-primary mb-3" to="/posts">
          Back
        </Link>
        <h3>{this.props.selectedPost.title}</h3>
        <small>Posted by {this.props.selectedPost.userName}</small>
        <p className="mt-3">{this.props.selectedPost.body}</p>
        <hr />
        <h5 className="mb-5">Comments</h5>
        <ul className="list-unstyled" />
        {this.props.comments.map(comment => {
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPost: state.selectedPost,
    comments: state.getComments
  };
};

export default connect(
  mapStateToProps,
  { selectedPostAction, getCommentsAction }
)(SinglePost);
