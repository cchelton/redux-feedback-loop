// single purpose button, do not submit, just advance. let redux hold inputs until submit
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class NextButton extends Component {
  handleClickNext = (path) => {
    this.props.history.push(path);
  };

  render() {
    const nextPath = this.props.nextPath;

    return (
      <button
        onClick={() => {
          this.handleClickNext(nextPath);
        }}
      >
        Next
      </button>
    );
  }
}

export default withRouter(NextButton);
