import React, { Component } from "react";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    const text = this.state.liked ? "좋아요 취소" : "좋아요";
    return (
      <button onClick={() => this.setState({ liked: true })}>{text}</button>
    );
  }
}

export default LikeButton;