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
        <small>Posted by {this.props.selectedPost.userId}</small>
        <p className="mt-3">{this.props.selectedPost.body}</p>
        <hr />
        <h5>Comments</h5>
        <ul class="list-unstyled" />
        {this.props.comments.map(comment => {
          return (
            <li key={comment.id} className="media">
              <img src="..." className="mr-3" alt="..." />
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
