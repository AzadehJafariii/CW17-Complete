import React, { Component } from "react";
import "./index.css";
class Comments extends Component {
  state = {};
  render() {
    return (
      <>
        <h4 className="commentsTitle">Comments</h4>
        {this.props.comments.map((comment) => (
          <p className="commentsBody">{comment.body}</p>
        ))}
      </>
    );
  }
}

export default Comments;
